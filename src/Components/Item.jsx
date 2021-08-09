import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
export default function Item({text,index,handleDelete}) {
   
  return (
    <Draggable draggableId={text} index={index}>
      {provided => (
        <div style={{backgroundColor: '#eee',
        borderRadius: 4,
        padding: '4px 8px',
        transition: 'background-color .8s ease-out',
        marginTop: 8,}}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
          <button onClick={()=>handleDelete(text,index)}>X</button>
        </div>
      )}
    </Draggable>
  )
}
