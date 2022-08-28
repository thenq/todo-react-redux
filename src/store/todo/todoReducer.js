const initialState = {
  filters: {
    search: '',
    status: 'All',
    priority: [],
  },
  todoList: [],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FILTER_SEARCH':
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      }
    case 'ADD_FILTER_STATUS':
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      }
    case 'ADD_FILTER_PRIORITY':
      return {
        ...state,
        filters: {
          ...state.filters,
          priority: action.payload,
        },
      }
    case 'UPDATE_COMPLETE_TODO':
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.completed = action.payload.completed
          }
          return todo
        }),
      }
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      }
    default:
      return state
  }
}

export default todoReducer
