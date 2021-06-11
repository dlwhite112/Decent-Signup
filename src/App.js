import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import MemberPortal from './components/MemberPortal';
import Form from './components/Form';
import logo from "../src/assets/decent-logo.png"

function App() {
  return (

    <div>
      <div className="nav">
      <nav class="navbar navbar-light bg-lighter">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src={logo} alt="decent-logo" height="50"></img>
    </a>
  </div>
</nav>
      </div>
      <div>
      <Router>
      <div>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/decent-signup">
            <Landing />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/member-portal">
            <MemberPortal />
          </Route>
        </Switch>
      </div>
    </Router>
  
      </div>
    </div>
  );
}

export default App;
