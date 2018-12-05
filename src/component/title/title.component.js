import React, { useContext, useEffect, useState } from 'react';
import FireBaseContext from '../../context';

const Title = ({title = 'change me'}) => {
  const [name, setName] = useState('uuu');
  const database = useContext(FireBaseContext);
  const myDay = database.ref().child('user');
  useEffect(() => {
    myDay.on('value', snap => {
      const value = snap.val().name;
      if (name !== value) {
        setName(value)
      }
    })
    return () => {
      myDay.off('value');
    }
  })
  
  return (
    <div>
      <div>Title: {title}</div>
      <div>By: {name}</div>
    </div>
  );
}

export default Title;