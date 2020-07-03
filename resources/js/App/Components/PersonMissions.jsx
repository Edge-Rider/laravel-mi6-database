import React from 'react';
import Mission from "./Mission";

export default class PersonMissions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newMission: null
        }
    }

    // todo - fetch data from DB and render missions as options of select
    // todo - make Add button working

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
                <form>
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
