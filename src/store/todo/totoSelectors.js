import { createSelector } from 'reselect'

export const getTodoList = (state) => state.todo.todoList
export const getSearchValue = (state) => state.todo.filters.search
export const getSearchStatus = (state) => state.todo.filters.status
export const getSearchPriority = (state) => state.todo.filters.priority

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
