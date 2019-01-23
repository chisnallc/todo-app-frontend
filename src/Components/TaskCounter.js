import React from 'react';

class taskCount extends React.Component {

    render() {

        return (

            <div style={styles.taskCount}>
                <h2>Task Counter</h2>
                            
                    { this.props.tasks.length }


                
            </div>
        );
    }
}

const styles = {

    taskCount: {

        font: "40px",
    },
}

export default taskCount;