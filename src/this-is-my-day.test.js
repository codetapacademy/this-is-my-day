import React from 'react';
import ReactDOM from 'react-dom';
import ThisIsMyDay from './this-is-my-day';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThisIsMyDay />, div);
  ReactDOM.unmountComponentAtNode(div);
});
