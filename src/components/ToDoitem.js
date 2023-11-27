import React from 'react'
import { useDispatch } from 'react-redux'
import { removetask } from '../Redux/ToDoslices/ToDoslice'


function ToDoitem({todo}) {
  const dispatch= useDispatch()
  return (
    <div className={`todo-item ${todo.isDone? "Done" : "undone"}`}>
        <div className='text'>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        </div>
        <span>{todo.isDone?"Done":"Not done"}</span>
      <button onClick={()=>dispatch(removetask({id:todo.id}))}>remove task</button>
    </div>
  )
}

export default ToDoitem