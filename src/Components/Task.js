import React from 'react';


class Task extends React.Component {

    render() {
        return (
            <div className="row" style={styles.taskRow}>
                <div className="col" style={styles.taskDescription}>
                    {this.props.taskDescription}
                </div>
                <div className="col" >
                    <input type="button" class= "btn btn-outline-success" value="Delete"style={styles.buttonStyle}  />
                    {this.props.buttonStyle}
                </div>
                <div className="col">
                    <input type="button" class= "btn btn-outline-success" value="Done" style={styles.buttonStyle} />
                    {this.props.buttonStyle}  
                </div>
            </div>
        );
    }
    
}

const styles = {
    taskRow: {
        paddingTop: "10px",
        paddingBottom: "10px"
    },
    taskDescription: {
        fontFamily: "Monospace",
        fontWeight: "bold",
        color: "brown",
        fontSize: "20px"

    },
    buttonStyle: {
        color: "brown"
    }
}



export default Task;