import React from 'react';
import './App.css';
import logo from './logo.svg';

const Name = (props) => {
    return (
        <div className = "nameSection">
            <span><img src ={logo} className="App-logo" alt = "user icon"/></span>
            <span className = "name">{props.name}</span>
            <span className = "handle">{props.handle}</span>
        </div>
    );
}
export default Name;