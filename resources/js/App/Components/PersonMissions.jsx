import React from 'react';
import Mission from "./Mission";

export default class PersonMissions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newMission: null
        }
    }

    handleNewMissionSubmit = (event) => {
        event.preventDefault();

        fetch('/api/whatever', {
            method: 'POST',
            body: JSON.stringify({
                person_id: this.props.person.id,
                mission_id: this.state.newMission
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {


                    console.log('success!');


                }
            })

        console.log('attach new mission', this.state.newMission, this.props.person.id);
    }


    render() {
        console.log(this.state);
        return (
            <div>
                <ul>
                    {
                        this.props.missions.map((mission, i) => (
                            <Mission key={i} name={mission.name} year={mission.year}/>
                        ))
                    }
                </ul>
                <form onSubmit={this.handleNewMissionSubmit}>
                    <select
                        value={this.state.newMission}
                        onChange={(e) => { this.setState({ newMission: e.target.value }) }}
                    >
                        {
                            this.props.allMissions.map((mission, i) => (
                                <option key={i} value={mission.id}>{mission.name}</option>
                            ))
                        }
                    </select>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
