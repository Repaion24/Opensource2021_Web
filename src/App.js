import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shoplist from './pages/Shoplist'
import Login from './pages/Login'
import Game from './pages/Game'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

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
            <Route path="/game">
              <Game />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
