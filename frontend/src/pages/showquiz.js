import {Link} from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Quiz from '../components/quiz.js';
import { listQuiz } from '../actions/quiz.js';
import load from '../image/Spinner1.gif';

function Showquiz() {
  const quizList = useSelector(state => state.quizList);
  const { quizs, loading, error } = quizList;
  const dispatch = useDispatch();
  // eslint-disable-next-line
  useEffect(() => {dispatch(listQuiz()); return () => {};}, []);

  return loading? <div>
        <header className="gwd-div-h7oc" id="Header">
          <p className="gwd-p-1uij"><span className="gwd-span-1fjr"><Link to="/" className="Link">Question Quiz Game</Link></span></p>
          <Link to="/addquiz"><button id="GoToMenu" className="gwd-button-1osf" >Add Question</button></Link> {/*eslint-disable-next-line*/}
        </header> <div className="loadImg"><img  src={load}/></div> </div> : error? <div className="error"> ERRRR {error} </div> : (
        <div>
          <header className="gwd-div-h7oc" id="Header">
            <p className="gwd-p-1uij"> <span className="gwd-span-1fjr"><Link to="/" className="Link">Question Quiz Game</Link></span></p>
            <Link to="/addquiz"><button id="GoToMenu" className="gwd-button-1osf" >Add Question</button></Link>
          </header>
          <br/><br/>
          <ul className="quizs">
            {quizs.map( (q) => <li className="zoominquiz"><Quiz quiz={q} /></li>)}
          </ul>
        </div>
  );
}

export default Showquiz;
