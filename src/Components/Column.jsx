import React from 'react'
import Item from './Item'
import { Droppable } from 'react-beautiful-dnd'
const Column = ( { col: { list, id },handleDelete } ) => {
 
  return (
    <Droppable droppableId={id}>
    {(provided) => (
      <div style={{
      padding: "24px 0",
      display: "flex",
      flexDirection: "column",
      marginTop: 8,
    }}>
        <h2 style={{
           margin: 0,
           padding: "0 16px"
        }}
        >{id}</h2>
        <div style={{
          backgroundColor: "#ddd",
          borderRadius: 8,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          marginTop: 8
        }}
         {...provided.droppableProps} ref={provided.innerRef}>
          {list.map((text, index) => (
            <Item key={text} text={text} index={index} handleDelete={handleDelete} />
            
          ))}
          {provided.placeholder}
        </div>
      </div>
    )}
  </Droppable>
  )
}

export default Column