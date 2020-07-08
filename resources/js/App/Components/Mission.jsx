import React from 'react';

export default class Mission extends React.Component {

    constructor(props) {
        super(props);


    }


    render() {
        return (
            <li>
                <strong>{this.props.name}</strong>
                {this.props.year}
                <button>Remove</button>
            </li>
        )
    }
}
