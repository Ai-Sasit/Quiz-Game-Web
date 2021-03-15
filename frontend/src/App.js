import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer.js';
import Index from './pages/Index.js';
import quiz from './pages/quziGame.js';
import addquiz from './pages/Addquiz.js';
import showquiz from './pages/showquiz.js';
import add_success from './pages/addSuccess.js';

function App() {
  return (
    <BrowserRouter>
      <div className="gwd-div-1gwd" id="All">
        <Switch>
          <Route path="/" exact={true} component={Index} />
          <Route path="/addquiz" component={addquiz} />
          <Route path="/showquiz" component={showquiz} />
          <Route path="/add_success" component={add_success} />
          <Route path="/quiz/:id" component={quiz} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
