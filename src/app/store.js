import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { blogReducer } from '../Reducer/blogReducer';


configureStore({
    reducer: {
        user: userReducer,
    },
});
const reducer = combineReducers({
  blogDetails: blogReducer,
  user: userReducer,

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;