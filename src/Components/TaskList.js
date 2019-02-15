import React from 'react';

import Task from './Task';



class TaskList extends React.Component {

    render() {


        return (
            <div>
                {
                    this.props.tasks.map((task, i) =>
                        <Task taskDescription={task.taskDescription} key={i}
                            onDeleteTaskHandler={this.props.onDeleteTaskHandler}
                            onDoneTaskHandler={this.props.onDoneTaskHandler}
                            taskStatus={task.completed}
                            taskId={task.id}
                        />
                    )
                }
            </div>



        );
    }

}

export default TaskList;