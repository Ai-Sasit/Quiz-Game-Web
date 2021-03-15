import {
    QUIZ_LIST_REQUEST, QUIZ_LIST_SUCCESS, QUIZ_LIST_FAIL,
    QUIZ_DETAIL_REQUEST, QUIZ_DETAIL_SUCCESS, QUIZ_DETAIL_FAIL
  } from '../constants.js';
  
  function quizListReducer(state={quizs: []}, action) {
    switch (action.type) {
      case QUIZ_LIST_REQUEST:
        return { loading: true };
      case QUIZ_LIST_SUCCESS:
        return { loading: false, quizs: action.payload };
      case QUIZ_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function quizDetailReducer(state={quiz: {}}, action) {
    switch (action.type) {
      case QUIZ_DETAIL_REQUEST:
        return { loading: true };
      case QUIZ_DETAIL_SUCCESS:
        return { loading: false, quiz: action.payload };
      case QUIZ_DETAIL_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  
  
  export { quizListReducer, quizDetailReducer };
  