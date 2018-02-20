import React from 'react';
import Child from './Child';

class Children extends React.Component {
    constructor() {
        super();
        this.state = {
            children: [
            {name: 'one', age:'two'},
            {name: 'a', age: 'three'}
            ],
            };
    }
    render() {
        return (
            <div>
                { this.state.children.map((child, index) => {
                    return <Child data={child}/>
                })
                }
            </div>
        );
    }
}
export default Children;