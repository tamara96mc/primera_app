import { createStore, combineReducers } from 'redux'
import status from './reducers/status'

const store = createStore(combineReducers({status}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() --> para poder debuggear con la extension
// cuando tenemos varios reducers, debemos combinarlos --> createStore(combineReducers({reducer1, reducer2, reducer3}))
export default store