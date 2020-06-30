import React from 'react';

export default class PeopleList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        }

    }

    componentDidMount = () => {

        fetch('/api/person')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })

    }

    render() {

        // define initial content (the Loading... indicator)
        let content = (
            <div className="loading">Loading data...</div>
        )

        // if the data arrived already
        if (this.state.data !== null){

            // overwrite content with something else
            content = (
                <div>Data arrived</div>
            )

        }

        // return the HTML code for this component with the content inside
        return (
            <div className="people-list">
                { content }
            </div>
        )

    }

}