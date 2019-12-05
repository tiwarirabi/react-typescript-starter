import React from 'react';

import './Textbox.css';

const Textbox = props => {

    const {className, value, onChange} = props;

    return (
        <input className={`Textbox ${className}`} value={value} onChange={onChange} />
    )
}

export default Textbox;