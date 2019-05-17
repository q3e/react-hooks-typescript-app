import React from 'react';
import ReactDOM from 'react-dom';
import OtherCost from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OtherCost />, div);
  ReactDOM.unmountComponentAtNode(div);
});
