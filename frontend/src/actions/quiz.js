import axios from 'axios';

import {
  QUIZ_LIST_REQUEST, QUIZ_LIST_SUCCESS, QUIZ_LIST_FAIL,
  QUIZ_DETAIL_REQUEST, QUIZ_DETAIL_SUCCESS, QUIZ_DETAIL_FAIL
} from '../constants.js';

const listQuiz = () => async (dispatch) => {
  try {
    dispatch({ type: QUIZ_LIST_REQUEST });
    const {data} = await axios.get('/api/quiz');
    dispatch({ type: QUIZ_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: QUIZ_LIST_FAIL, payload: error.message });
  }
};

const detailQuiz = (quizId) => async (dispatch) => {
  try {
    dispatch({ type: QUIZ_DETAIL_REQUEST });
    const {data} = await axios.get(`/api/quiz/${quizId}`);
    dispatch({ type: QUIZ_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: QUIZ_DETAIL_FAIL, payload: error.message });
  }
};

const checkAnswer = (answer,_id) => {
  axios.get(`/api/check/${_id}/${answer}`).then(response =>{
    if(response.data.check){
      alert("Yeah! You are correct!")
    }else{
      alert("Hahaha! You are incorrect!")
    }
  });
}

const addquiz = (acti,level,question,answer,cats) => {
    axios.get(`/api/addquiz/${level}/${question}/${answer}/${cats}/${acti}`)
}


export { addquiz, listQuiz, detailQuiz, checkAnswer }