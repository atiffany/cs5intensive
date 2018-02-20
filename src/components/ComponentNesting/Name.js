import React from 'react';
import './App.css';

const Name = (props) => {
    return (
        <div className = "nameSection">
            <span><img src ='./logo.svg' className="App-logo" /></span>
            <span className = "name">Lambda School</span>
            <span className = "handle">@LambdaSchool</span>
        </div>
    );
}
export default Name;