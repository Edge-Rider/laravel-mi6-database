import React from 'react';
import PersonMissions from "./PersonMissions";

export default class PeopleList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            allMissions: null
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
        .then(response => {
            // if the response code is 200 (OK)
            if (response.status == 200) {
                // parse it as JSON and do the typical stuff
                response.json()
                .then(data => {
                    // set the data into this component's state
                    this.setState({
                        data: data
                    })
                })
            } else {
                // otherwise react on the error code
                if (response.status == 401) {
                    // signal to the App that authentication failed
                    this.props.onFailedAuthentication()
                }
            }
        })

        fetch('/api/mission', {
            headers: {
                'Accept':       'application/json', // we expect JSON as response
                'Content-Type': 'application/json', // if we are sending something in the body, it is JSON
                'Authorization': 'Bearer ' + this.props.token
            }
        })
            .then(response => {
                // if the response code is 200 (OK)
                if (response.status == 200) {
                    // parse it as JSON and do the typical stuff
                    response.json()
                        .then(data => {
                            // set the data into this component's state
                            this.setState({
                                allMissions: data
                            })
                        })
                } else {
                    // otherwise react on the error code
                    if (response.status == 401) {
                        // signal to the App that authentication failed
                        this.props.onFailedAuthentication()
                    }
                }
            })
    }

    render() {

        console.log(this.state);

        // define initial content (the Loading... indicator)
        let content = (
            <div className="loading">Loading data...</div>
        )

        // if the data arrived already
        if (this.state.data !== null){

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
                                <PersonMissions person={person} missions={person.missions} allMissions={this.state.allMissions}/>
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
