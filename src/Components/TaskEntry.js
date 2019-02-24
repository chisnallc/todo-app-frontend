import React from 'react';
class TaskEntry extends React.Component {

    constructor(props) {
        super('props');

        this.state = {
            taskDescription: ""
        };
/// event binding functions
        this.onSavedClicked = this.onSavedClicked.bind(this);
        this.onTaskTextFieldUpdated = this.onTaskTextFieldUpdated.bind(this);
    }

///this function fires when the add button is clicked
    onSavedClicked() {

        const taskToBeAdded = {
           ///id removed as i is not the id stored on the database
            taskDescription: this.state.taskDescription,
            completed: false
        };
        this.props.onSaveTaskHandler(taskToBeAdded);
///this clears the text boxt after the task is added

        this.setState({
            taskDescription: ""
        })
    }

///thi is fired wehn the text box is changed
    onTaskTextFieldUpdated(event) {

        const description = event.target.value;
        this.setState({
            taskDescription: description
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col">
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