import React from 'react';
import { database, /*auth, googleAuthProvider, storage*/ } from './firebase';
import FireBaseContext from './context'
import Title from './component/title';
import './this-is-my-day.css';

// console.log(FireBaseContext)
// console.log(database)

const ThisIsMyDay = () => {
  
  return (
    <FireBaseContext.Provider value={database}>
      <div className="App">
        <Title title="React Hooks"/>
      </div>
    </FireBaseContext.Provider>
    )
}
export default ThisIsMyDay;
