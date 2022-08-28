export const addSearchFilter = (payload) => {
  return {
    type: 'ADD_FILTER_SEARCH',
    payload,
  }
}

export const addFilterStatus = (payload) => {
  return {
    type: 'ADD_FILTER_STATUS',
    payload,
  }
}

export const addFilterPriority = (payload) => {
  return {
    type: 'ADD_FILTER_PRIORITY',
    payload,
  }
}

export const updateCompleteTodo = (payload) => {
  return {
    type: 'UPDATE_COMPLETE_TODO',
    payload,
  }
}

export const addTodo = (payload) => {
  return {
    type: 'ADD_TODO',
    payload,
  }
}

export const deleteTodo = (payload) => {
  return {
    type: 'DELETE_TODO',
    payload,
  }
}
