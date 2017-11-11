import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'
import {createLogger} from 'redux-logger'

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const configStore = () => createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
)

export default configStore