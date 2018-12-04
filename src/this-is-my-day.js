import React from 'react';
import firebase from './firebase';
import Title from './component/title';
import './this-is-my-day.css';

const FireBaseContext = React.createContext();
console.log(firebase, FireBaseContext)

const ThisIsMyDay = () => {
  
  return (
      <FireBaseContext.Provider firebase={firebase}>
        <div className="App">
          <Title title="React Hooks"/>
        </div>
      </FireBaseContext.Provider>
    )
}

export default ThisIsMyDay;
