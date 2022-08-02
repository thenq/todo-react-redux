import { createSelector } from '@reduxjs/toolkit'

export const getTodoList = (state) => state.todos.todoList
export const getSearchValue = (state) => state.todos.filters.search
export const getSearchStatus = (state) => state.todos.filters.status
export const getSearchPriority = (state) => state.todos.filters.priority

export const getTodoListWithFilter = createSelector(
  getTodoList,
  getSearchValue,
  getSearchStatus,
  getSearchPriority,
  (todoList, search, status, priority) => {
    return todoList.filter(
      (todo) =>
        (!search ? true : todo.name.includes(search)) &&
        (status === 'All' ? true : status === 'Completed' ? todo.completed : !todo.completed) &&
        (!priority.length ? true : priority.includes(todo.priority)),
    )
  },
)
