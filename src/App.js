import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from "./spotify";
import Location from './Location';

function App() {

  const [token, setToken] = useState(null);


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token);
    }

    console.log("Hello");

  },[]);


  return (
    <div className="app">
    {
      token ? (
        <Location />
      ) : (
        <Login />
      )
    }
    </div>
  );
}

export default App;
