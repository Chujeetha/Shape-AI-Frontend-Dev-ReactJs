import React from 'react';
import './Clbutton.css';

export const Clbutton = props => (
    <div className="clb" onClick={props.handleClear}>
    {props.children}</div>
);