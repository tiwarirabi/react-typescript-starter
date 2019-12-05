import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    text: "Test Button",
    onClick: () => {} 
  }

  ReactDOM.render(<Button {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
