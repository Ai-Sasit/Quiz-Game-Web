import {Link} from 'react-router-dom';

function Index() {
    return (
        <div>
            <header className="gwd-div-h7oc" id="Header">
                <p className="gwd-p-1uij"><span className="gwd-span-1fjr"><Link to="/" className="Link">Question Quiz Game</Link></span></p> 
                <Link to="/addquiz"><button id="GoToMenu" className="gwd-button-1osf" >Add Question</button></Link>
            </header>
            <index className="gwd-div-8kp3">
                <span className="gwd-span-hpwn">Welcome To <br/>Question Quiz Game<br/>Game for Funny</span>
                <Link to="/showquiz" ><button className= "IndexButton">Let's Play!</button></Link>
            </index>
        </div>
    );
}

export default Index;