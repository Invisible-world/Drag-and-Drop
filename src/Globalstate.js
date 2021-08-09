import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialColumns = {
    initialState:[
        {
            id: 'todo',
            list: ['item 1', 'item 2', 'item 3']
          },
           {
            id: 'doing',
            list: []
          },
           {
            id: 'done',
            list: []
          }
    ]
    
  }

  export const GlobalContext = createContext(initialColumns);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialColumns);


  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
    });
  }
  

  return (
    <GlobalContext.Provider
      value={{
        initialState: state.initialState,
        removeEmployee
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};