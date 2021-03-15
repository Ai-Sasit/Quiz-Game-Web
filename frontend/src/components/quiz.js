import {Link} from 'react-router-dom';

function Quizlist(props) {
    
  const q = props.quiz;
    return (
      <Link to={`/quiz/${q._id}`} className="Link">
        <div className={`quiz quiz_${q.Level}`} >
          <div className="quiz-title">{q.Title}</div>
          <div className="quiz-cats">{q.Catagory}</div>
          <div className="quiz-level">{q.Level}</div>
        </div>
      </Link>
    ); 
}

export default Quizlist;
