import React from 'react';
import ReactDOM from 'react-dom';
import Textbox from './Textbox';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    value: "Test Textbox",
    onChange: () => {}
  }

  ReactDOM.render(<Textbox {...props} />, div);

  ReactDOM.unmountComponentAtNode(div);
});
