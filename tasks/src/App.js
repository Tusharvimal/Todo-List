import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './MyComponents/Header';
import Tasks from './MyComponents/Tasks';
import Login from './MyComponents/Login';
import SignUp from './MyComponents/SignUp';
import Profile from './MyComponents/Profile';


function App() {

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Header />
              <Tasks />
            </Route>
            <Route exact path="/profile">
              <Header />
              <Profile />
            </Route>
            <Route exact path="/login">
              <Header/>
              <Login />
            </Route>
            <Route exact path="/signup">
              <Header/>
              <SignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
