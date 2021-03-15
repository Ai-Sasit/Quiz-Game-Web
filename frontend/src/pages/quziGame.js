import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {detailQuiz, checkAnswer} from '../actions/quiz.js';
import load from '../image/Spinner-1s-800px.gif';

function QuizGame(props) {

    const [ans, setAns] = useState("");

    const quizDetail = useSelector(state => state.quizDetail);
    const { quiz, loading, error } = quizDetail;
    const dispatch = useDispatch();
    
    useEffect( () => { 
        dispatch(detailQuiz(props.match.params.id));
        return () => {}; /*eslint-disable-next-line*/
    }, []);

    const submitit = () => {checkAnswer(ans,props.match.params.id);}

    return loading? <div>
        <header className="gwd-div-h7oc" id="Header">
            <p className="gwd-p-1uij"><span className="gwd-span-1fjr"><Link to="/" className="Link">Question Quiz Game</Link></span></p>
                <Link to="/showquiz"><button id="GoToMenu" className="gwd-button-1osf" >BACK</button></Link> {/*eslint-disable-next-line*/}
        </header>  <div className="loadImg"><img  src={load}/></div> </div> : error? <div className="error"> ERRRR {error} </div> : (
        <div className="Screen">
            <header className="gwd-div-h7oc" id="Header">
                <p className="gwd-p-1uij"><span className="gwd-span-1fjr"><Link to="/" className="Link">Question Quiz Game</Link></span><br/></p>
                <Link to="/showquiz"><button id="GoToMenu" className="gwd-button-1osf" >BACK</button></Link> 
            </header>
            <div className="Container">
                <button id="button_1" className="gwd-button-ka0e" onClick={submitit}>Check</button>
                <p className="gwd-p-1ghr">{quiz.Title}</p>
                <div className="gwd-div-1bvd" disabled><p>{quiz.Question}</p></div>
                <input type="text" placeholder="Input Answer" className="gwd-p-1j3u gwd-p-qw42 AnsInput" onChange={(e) =>{setAns(e.target.value)}}/>
                <p className="gwd-p-1j3u gwd-p-qw42">{quiz.Level}</p>
                <p className="gwd-p-1j3u gwd-p-onkl">Tag: {quiz.Catagory}</p>
            </div>
        </div>
    )
}

export default QuizGame;