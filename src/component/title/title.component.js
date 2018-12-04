import React, { useContext } from 'react';
import { debug } from 'util';

const Title = ({title = 'change me'}) => {
  const database = useContext('firebase');
  console.log(database)
  // debugger

  const myDay = database.ref('my-day');
  myDay.on('value', snap => {
    console.log(`fire is away: ${snap.val()}`)
  })
  return (
    <div>Title: {title}</div>
  );
}

export default Title;