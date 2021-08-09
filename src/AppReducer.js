export default function appReducer(state, action) {
    switch (action.type) 
    {case "REMOVE_EMPLOYEE":
        return {
          ...state,
          initialColumns: state.initialColumns.filter(
            (employee) => employee.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };    