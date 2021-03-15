import img from '../image/true.png';
import {Link} from 'react-router-dom';

function AddSuccess(props) {

    const goMenu = () => {props.history.push("/showquiz")}
    const addAgain = () => {props.history.push("/addquiz")}
  
      return (
        <div className="Screen">
          <header className="gwd-div-h7oc" id="Header">
            <p className="gwd-p-1uij"><span className="gwd-span-1fjr"><Link to="/" className="Link">Question Quiz Game</Link></span></p>
            <Link to="/showquiz"><button id="GoToMenu" className="gwd-button-1osf" >BACK</button></Link> 
          </header>
          <div className="Container">
            <h3 className="Title_Success">Add Question Success!</h3> {/*eslint-disable-next-line*/}
            <img className="img-Success" src={img}/>
            <button className="gwd-button-esfy gwd-button-ka0e5" onClick={addAgain}>ADD</button>
            <button className="gwd-button-esfy gwd-button-v9vg" onClick={goMenu}>MENU</button>
          </div>
        </div>
      );
  }
  
  export default AddSuccess;
  