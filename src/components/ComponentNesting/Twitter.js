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
import Comment from './Reactions/Comment';
import Retweet from './Reactions/Retweet';
import Heart from './Reactions/Heart';
import Share from './Reactions/Share';

class Twitter extends React.Component{
    constructor() {
        super();
        this.state = {
            name: 'Lambda School',
            handle: '@LambdaSchool',
            text: "Announcing Lambda School Trials - the easiest way to try out the perfect software engineer. \n1. Describe your role\n2. We'll arrange back-to-back interviews with ideal students\n3. Select and try them out at a flat rate. No payroll or paperwork\n'https://lambdaschool.com/trials ' ",
            comments: [
                {
                    username: "twitch",
                    text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
                },
                {
                    username: "michaelmarzetta",
                    text: "Omg that match was crazy"
                },
                {
                    username: "themexican_leprechaun",
                    text: "What a setup"
                },
                {
                    username: "dennis_futbol",
                    text: "It that injustice"
                },
                {
                    username: "dennis_futbol",
                    text: "Is"
                }
            ],
            likes: 0,
        };
    }
    render() {
        return(
            <div className="Tweet">
                <Name name = {this.state.name} handle={this.state.handle}/>
                <TweetFiller text={this.state.text}/>
                <span className = "inline">
                    <Comment comments={this.state.comments}/>
                    <Retweet />
                    <Heart likes={this.state.likes}/>
                    <Share />
                </span>
            </div>
        );
    }
}

export default Twitter;