import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer as HomeReducer } from './home'
import { todoReducer, visibilityFilterReducer } from './todo'

let reducers = combineReducers({
    home: HomeReducer,
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer
});

export function initializeStore() {
    return createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}