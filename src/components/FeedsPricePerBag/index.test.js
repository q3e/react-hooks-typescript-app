import React from 'react';
import ReactDOM from 'react-dom';
import FeedPricePerBag from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeedPricePerBag />, div);
  ReactDOM.unmountComponentAtNode(div);
});
