import { configureStore } from '@reduxjs/toolkit'
import  todoSlice  from './ToDoslices/ToDoslice'

export const store = configureStore({
  reducer: {
    todo:todoSlice,
  },
})