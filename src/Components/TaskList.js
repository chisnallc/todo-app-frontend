import React from 'react';

import Task from './Task';



class TaskList extends React.Component {

    render() {


        return (
            <div>
                {
                    this.props.tasks.map((task, i) =>
                        <Task taskId = {task.taskId} taskDescription={task.taskDescription} key={i}
                            onDeleteTaskHandler={this.props.onDeleteTaskHandler}
                            onDoneTaskHandler={this.props.onDoneTaskHandler}
                            taskStatus={task.completed}
                            
                        />
                    )
                }
            </div>



        );
    }

}

export default TaskList;