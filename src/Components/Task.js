import React from 'react';

class Task extends React.Component {

    render() {
        return (
            <div className="row" style={look.taskRow}>
                <div className="col">
                </div>
                <div className="col">
                    <input type="button" value="Delete" />
                </div>
                <div className="col">
                    <input type="button" value="Done" />
                </div>
            </div>





        );
    }


}

const look = {


    taskRow: {
        paddingTop: "15px",
        paddingBottom: "15px",
        color: "blue"
    }
}


export default Task;