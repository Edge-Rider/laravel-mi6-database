import React from 'react';
import Mission from "./Mission";

export default class PersonMissions extends React.Component {

    constructor(props) {
        super(props);


    }

    // todo - fetch data from DB and render missions as options of select
    // todo - make Add button working

    render() {

        console.log(this.props.missions);

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
                    <select>
                        <option>Mission 1</option>
                        <option>Mission 2</option>
                    </select>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
