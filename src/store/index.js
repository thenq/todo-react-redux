import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import todoReducer from './todo/todoReducer'
import userReducer from './user/userReducer'

const composeEnhancers = composeWithDevTools()

const rootReducer = combineReducers({ todo: todoReducer, user: userReducer })

const store = createStore(rootReducer, composeEnhancers)

export default store
