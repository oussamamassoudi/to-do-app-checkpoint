import { createSlice } from '@reduxjs/toolkit'

const initialState = {
Todolist: [
    {
        id:Math.random(),
        title:"to do item1",
        description:"description Todo item 1",
        isDone:false,
    },
    {
        id:Math.random(),
        title:"to do item2",
        description:"description Todo item 2",
        isDone:false,
    },
    {
        id:Math.random(),
        title:"to do item3",
        description:"description Todo item 3",
        isDone:true,
    },
    
]

}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtask: (state, action) => {
       state.Todolist.push(action.payload);
    },
    removetask: (state, action) => {
     state.Todolist=state.Todolist.filter((el)=>el.id !== action.payload.id)
   },
   
  },
})

// Action creators are generated for each case reducer function
export const {addtask, removetask} = todoSlice.actions

export default todoSlice.reducer