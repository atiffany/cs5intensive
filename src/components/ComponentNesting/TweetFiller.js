import React from 'react';
import './App.css';

const TweetFiller = (props) => {
    return (
        <div className="tweetText">
            {props.text}
        </div>
    );
}
export default TweetFiller;