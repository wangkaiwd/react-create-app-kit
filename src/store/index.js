import { createStore, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import ReduxLogger from 'redux-logger'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(ReduxThunk, ReduxLogger)
))
export default store