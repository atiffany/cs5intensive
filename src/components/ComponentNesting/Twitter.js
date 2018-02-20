/*
icon COM
name, handle, date, {show more icon}
tweet filler (text and link) COM
comment, retweet, heart, share--these are icons 4 COM
*/
import React from 'react';
import './App.css';
import Name from './Name';
import TweetFiller from './TweetFiller';
import Comment from './Comment';
import Retweet from './Retweet';
import Heart from './Heart';
import Share from './Share';

class Twitter extends React.Component{
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return(
            <div className="Tweet">
                <Name />
                <TweetFiller />
                <span class = "inline">
                    <Comment />
                    <Retweet />
                    <Heart />
                    <Share />
                </span>
            </div>
        );
    }
}

export default Twitter;