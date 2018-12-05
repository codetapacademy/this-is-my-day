import React, { useContext, useEffect } from 'react';
import FireBaseContext from '../../context';

const Title = ({title = 'change me'}) => {
  const database = useContext(FireBaseContext);

debugger
  database.ref().child('user').on('value', snap => console.log(snap.val()))
  // useEffect(() => {
  // })
  
  // myDay.on('value', snap => {
  //   console.log(`fire is away: ${snap.val()}`)
  // })
  return (
    <div>Title: {title}</div>
  );
}

export default Title;