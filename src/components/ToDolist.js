import React from 'react'
import { useSelector } from 'react-redux'
import ToDoitem from './ToDoitem';
import AddToDo from './AddToDo';

function ToDolist() {
    const todos = useSelector((state) => state.todo.Todolist);
    console.log(todos);
  return (
    <div className='todo-list'>
      <AddToDo/>
       { todos.map((todo) =>(<ToDoitem todo={todo}/>))
       }
    </div>
  )
}

export default ToDolist