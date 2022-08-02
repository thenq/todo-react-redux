import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todo/todoSlice'
import userSlice from './user/userSlice'

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    todos: todoSlice.reducer,
  },
})

export default store
