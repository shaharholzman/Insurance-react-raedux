import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import DashBord from './component/DashBord';
import CreateClaim from './component/CreateClaim';
import NavBar from './component/NavBar';
import Policies from './component/Policies';

function App() {
  return (
          <Router>

    <div className="App">
      <header className="container-fluid">
        <NavBar />
      </header>
      <main container-fluid>
      <Switch>
        <Route path="/Home" component={DashBord }/>
        <Route path="/Claim" component={CreateClaim }/>
        <Route path="/Policies" component={Policies}/>
        <Redirect from="/" to="Home"/>
        </Switch>

      </main>
    </div>
    </Router>

  );
}


export default App;
