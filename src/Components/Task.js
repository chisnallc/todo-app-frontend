import React from 'react';


class Task extends React.Component {
    constructor(props) {
        super(props);

        this.deleteTask = this.deleteTask.bind(this);
        this.removeDone =this.removeDone.bind(this);

        

        
    }
deleteTask(){
   this.props.onDeleteTaskHandler(this.props.taskId);
}

removeDone(){
    this.props.onDoneTaskHandler(this.props.taskId);

}
    render() {

        return (
            <div className="row" style={styles.taskRow} >
                <div className="col" style={styles.taskDescription}>
                    {this.props.taskDescription}
                </div>
                <div className="col" >
                    <input type="button" class="btn btn-outline-success" value="Delete" style={styles.buttonStyle}onClick={this.deleteTask} />
                    {this.props.buttonStyle}
                </div>
                <div className="col">
                    <input type="button" class="btn btn-outline-success" value="Done" style={styles.buttonStyle}onClick={this.removeDone} />
                    {this.props.buttonStyle}
                </div>
            </div>
        );
    }
}



const styles = {
    taskRow: {
        paddingTop: "50px",
        paddingBottom: "50px"
    },
    taskDescription: {
        fontFamily: "Monospace",
        fontWeight: "bold",
        color: "brown",
        fontSize: "20px"

    },
    buttonStyle: {
        color: "black",
        fontWeight: "bold"
    }
}



export default Task;