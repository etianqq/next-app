import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer as HomeModel } from './home'

let reducers = combineReducers({
    home: HomeModel,
});

export function initializeStore() {
    return createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}