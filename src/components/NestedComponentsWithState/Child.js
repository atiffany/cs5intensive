import React from 'react';

const Child = (props) => {
    return (
        <div> New Child:
            <div>Name: {props.data.name}, Age: {props.data.age}</div>
        </div>
    );
}

export default Child;