import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { quizListReducer, quizDetailReducer } from './reducers/quizReducer.js';

const initialState = {};

const reducers = combineReducers({
  quizList: quizListReducer,
  quizDetail: quizDetailReducer,
});

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)));

export default store;
