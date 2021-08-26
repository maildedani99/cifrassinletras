import React, { useContext, useState } from 'react';
import styles from './app.module.css';
import Main from './pages/main/main';
import Login from './pages/login/login';
import Access from './pages/access/access';
import CreateRoom from './pages/createroom/createroom';
import { LOGIN, MAIN, CREATEROOM, ACCESS } from './routes';
import { AccessProvider } from './contexts/accesscontext';
import { NumbersProvider } from './contexts/numberscontext';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <div className={styles.__app_container}>
      <Router>
      <Switch>
      <AccessProvider>
          {/* <Route exact path={LOGIN}>
            <Login />
          </Route>
          <Route exact path={ACCESS}>
            <Access />
          </Route>
          <Route exact path={CREATEROOM}>
            <CreateRoom />
          </Route> */}
          <NumbersProvider>
          <Route exact path={MAIN}>
            <Main />
          </Route>
          </NumbersProvider>
      </AccessProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
