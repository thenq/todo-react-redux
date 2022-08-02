import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    filters: {
      search: '',
      status: 'All',
      priority: [],
    },
    todoList: [],
  },
  reducers: {
    addFilterSearch: (state, action) => {
      state.filters.search = action.payload
    },
    addFilterStatus: (state, action) => {
      state.filters.status = action.payload
    },
    addFilterPriority: (state, action) => {
      state.filters.priority = action.payload
    },
    updateCompleteTodo: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = action.payload.completed
        }
        return todo
      })
    },
    addTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload)
    },
  },
})

export default todoSlice
