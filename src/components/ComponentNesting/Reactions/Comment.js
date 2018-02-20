import React from 'react';
import '../App.css';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments : this.props.comments,
            newComment: '',
            toggled: false,
        };
    }
    handleClick() {
        const toggled = !this.state.toggled;
        this.setState({ toggled });
    }
    render() {
        return (
            <div className = "inline--item">
                <div onClick = {this.handleClick.bind(this)}>Comment</div>
                {this.state.toggled ? 
                    <div>{this.state.comments.map((comment, index) => {
                        return <div key={index} className="commentText"> <span className="commentText--user">{comment.username}</span> : <span className="commentText--text">{comment.text}</span> </div>
                        })
                    }</div>
                    : null
                }
            </div>
        );
    }
}
export default Comment;