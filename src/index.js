import React from 'react';
import ReactDOM from 'react-dom';
import './this-is-my-day.css';
import ThisIsMyDay from './this-is-my-day';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ThisIsMyDay />, document.getElementById('this-is-where-react-will-render-the-entire-project-isn-t-it-fun'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
