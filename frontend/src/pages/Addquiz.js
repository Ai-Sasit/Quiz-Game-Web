import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {addquiz} from '../actions/quiz.js';

function Addquiz(props) {
  const [level, setLevel] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [cats, setCats] = useState("");
  const [acti, setActi] = useState("");

  const showAnswer = () => {
    if (question && level && answer && cats && acti){
      addquiz(acti,level,question,answer,cats)
      props.history.push("/add_success")
    }else{
      alert("Transaction Failed | Need to add all input form.")
    }
  }

    return (
      <div className="gwd-div-xzgw">
        <header className="gwd-div-h7oc" id="Header">
          <p className="gwd-p-1uij"><span className="gwd-span-1fjr"><Link to="/" className="Link">Question Quiz Game</Link></span></p>
          <Link to="/showquiz"><button id="GoToMenu" className="gwd-button-1osf" >BACK</button></Link> 
        </header>
        <div className="gwd-div-4xpz"><span className="gwd-span-vfvg" >Add new question</span>
        <form>
          <input type="text" id="Quiz" placeholder="Title" autoComplete="off" className="gwd-input-1gcf gwd-input-3s46" onChange={(e) => {setQuestion(e.target.value)}}/>
          <input type="text" id="Ans" placeholder="Answer" autoComplete="off" className="gwd-input-1gcf gwd-input-3s46 gwd-input-1md6" onChange={(e) => {setAnswer(e.target.value)}} />
          <textarea type="text" placeholder="Question" id="article" className="gwd-input-1gcf gwd-input-xf7b" onChange={(e)=>{setActi(e.target.value)}}></textarea>
          <select id="Level" className="gwd-select-ndvs" onChange={(e) =>{setLevel(e.target.value)}}>
            <option defaultValue="" hidden>Select Level</option>
            <option value="⭐">⭐</option>
            <option value="⭐⭐">⭐⭐</option>
            <option value="⭐⭐⭐">⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
          </select>
          <select id="cats" className="gwd-select-ndvs gwd-select-uopq" required onChange={(e) =>{setCats(e.target.value)}}>
            <option defaultValue="" hidden>Select Catagory</option>
            <option value="Math">Math</option>
            <option value="Computer">Computer</option>
            <option value="History">History</option>
            <option value="Game">Game</option>
            <option value="Space">Space</option>
          </select>
        <input type="submit" id="Add" className="gwd-button-15h2" onClick={showAnswer} value="Add"/>
      </form>
    </div>
  </div>
    );
}

export default Addquiz;