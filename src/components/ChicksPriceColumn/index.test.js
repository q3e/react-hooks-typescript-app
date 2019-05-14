import React from 'react';
import ReactDOM from 'react-dom';
import ChicksPriceColumn from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChicksPriceColumn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
