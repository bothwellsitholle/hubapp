import React, { useContext } from 'react';
import './App.css';
import Login from './components/auth/Login';
import Header from './components/Header';
import MyAccount from './components/menu/MyAccount';
import MyHub from './components/menu/MyHub';
import MySettings from './components/menu/MySettings';
import AuthContext from './store/AuthContext';
import { Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div className='App'>
      {isLoggedIn && (
        <>
          <Header />
          <Route path='/' exact>
            <MainContent />
          </Route>
          <Route path='/account'>
            <MyAccount />
          </Route>
          <Route path='/settings'>
            <MySettings />
          </Route>
          <Route path='/hubinfo'>
            <MyHub />
          </Route>
        </>
      )}
      {!isLoggedIn && (
        <div className={"login"}>
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
