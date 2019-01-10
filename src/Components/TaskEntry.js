import React from 'react';
class TaskEntry extends React.Component {

    constructor(props) {
        super('props');

        this.state = {
            taskDescription: ""
        };

        this.onSavedClicked = this.onSavedClicked.bind(this);
        this.onTaskTextFieldUpdated = this.onTaskTextFieldUpdated.bind(this);
    }


    onSavedClicked() {

        const taskToBeAdded = {
            id: (Math.random() * 100),
            description: this.state.taskDescription,
            completed: false
        };
        this.props.onSaveTaskHandler(taskToBeAdded);


        this.setState({
            taskDescription: ""
        })
    }


    onTaskTextFieldUpdated(event) {

        const description = event.target.value;
        this.setState({
            taskDescription: description
        });
    }
    render() {
        return (
            <div className="row">
                <div classname="col">
                    <input type="text" value={this.state.taskDescription} onChange={this.onTaskTextFieldUpdated} />
                </div>
                <div className="col">
                    <input type="button" value="Add" onClick={this.onSavedClicked} />
                </div>
            </div>






        );





    }
}



export default TaskEntry;