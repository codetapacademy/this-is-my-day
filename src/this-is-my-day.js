import React, { Component } from 'react';
import './App.css';
import FireBase from './firebase';

const ThisIsMyDay = () => {
  const FirebaseContext = React.createContext(FireBase);

  return (
      <div className="App">
        <h1>Zicem Pa</h1>
      </div>
    )
}

export default ThisIsMyDay;
