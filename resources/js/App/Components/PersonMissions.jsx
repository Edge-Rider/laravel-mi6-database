import React from 'react';
import Mission from "./Mission";

export default class PersonMissions extends React.Component {

    constructor(props) {
        super(props);


    }


    render() {
        return (
            <ul>
                <Mission name="test mission 1" year={2000}/>
                <Mission name="test mission 2" year={2001}/>
                <Mission name="test mission 3" year={2002}/>
            </ul>
        )
    }
}
