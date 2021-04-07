import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shoplist from './pages/Shoplist'
import Login from './pages/Login'
import Game from './pages/Game'
import Signup from './pages/Signup'
import Broadcast from './pages/Broadcast'
import Office from './pages/Office'
import More from './pages/More'


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="container">
          <Switch>
            <Route path="/shoplist">
              <Shoplist />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>
            <Route path="/Game">
              <Game />
              </Route>
            <Route path="/Broadcast">
              <Broadcast />
            </Route>
            <Route path="/Office">
              <Office />
            </Route>
            <Route path="/Office">
              <More />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
