import React from 'react';

export default class PeopleList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        }

    }

    componentDidMount = () => {

        fetch('/api/person', {
            headers: {
                'Accept':       'application/json', // we expect JSON as response
                'Content-Type': 'application/json', // if we are sending something in the body, it is JSON
                'Authorization': 'Bearer ' + this.props.token
            }
        })
        .then(response => response.json())
        .then(data => {
            if (typeof(data.message) == 'undefined') {
                this.setState({
                    data: data
                })
            }
        })
        .catch(() => {
            this.props.onFailedAuthentication()
        })

    }

    render() {

        // define initial content (the Loading... indicator)
        let content = (
            <div className="loading">Loading data...</div>
        )

        // if the data arrived already
        if (this.state.data !== null){

            console.log(this.state.data);
            // overwrite content with something else
            content = (
                <ul>
                    {
                        this.state.data.map(person => (

                            <li className="person" key={ person.id }>
                                <div className="person__image">
                                    <img src={ person.image_url } alt=""/>
                                </div>
                                <div className="person__data">
                                    <div className="person__name">{ person.name }</div>
                                    <div className="person__nationality">{ person.nationality }</div>
                                </div>
                            </li>

                        ))
                    }
                </ul>
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