import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../Redux/ToDoslices/ToDoslice'

function AddToDo() {
   const dispatch= useDispatch()
    const [task, settask] = useState({
        id:Math.random(),
        title:"",
        description:"",
        isDone: false,
    })
  return (
    <div className='add-task'>
        <input type='text' placeholder='add task title' onChange={(e)=>(settask({...task, title:e.target.value}))}/>
        <input type='text' placeholder='add task description' onChange={(e)=>(settask({...task, description:e.target.value}))}/>
        <button onClick={()=>dispatch(addtask(task))}>Add new task</button>
    </div>
  )
}

export default AddToDo