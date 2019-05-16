import React from 'react';
import ReactDOM from 'react-dom';
import FeedsPriceColumn from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeedsPriceColumn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
