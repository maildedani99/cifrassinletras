import React, { useContext, useState } from 'react';
import styles from './app.module.css';
import Main from './pages/main/main';
import Login from './pages/login/login';
import CreateRoom from './pages/createroom/createroom';
import { LOGIN, MAIN, CREATEROOM } from './routes';
import { NumbersProvider } from './contexts/numberscontext';
import { AccessProvider } from './contexts/accesscontext';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <div className={styles.__app_container}>
      <AccessProvider>

    <NumbersProvider>
      <Router>
      <Switch>
          <Route exact path={LOGIN}>
            <Login />
          </Route>
          <Route exact path={MAIN}>
            <Main />
          </Route>
          <Route exact path={CREATEROOM}>
            <CreateRoom />
          </Route>
        </Switch>
      </Router>
    </NumbersProvider>
      </AccessProvider>
    </div>
  );
}

export default App;
