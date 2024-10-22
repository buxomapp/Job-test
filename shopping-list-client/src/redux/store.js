import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import shoppingListReducer from './reducers/shoppingListReducer';

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
