import React from 'react';
import '../App.css';

class Heart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes,
        };
    }

    handleClick() {
        const likes = this.state.likes + 1;
        this.setState({ likes });

    }
    render() {
        return (
            <div className = "inline--item">
                <span onClick = {this.handleClick.bind(this)}>Likes :</span>
                <span>{this.state.likes}</span>
            </div>
        );
    }
}
export default Heart;