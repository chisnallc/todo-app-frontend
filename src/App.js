import React, { Component } from 'react';
import Header from './Components/Header';
import TaskEntry from './Components/TaskEntry';
import TaskList from './Components/TaskList';
import TaskCount from './Components/TaskCounter';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.removeDone = this.removeDone.bind(this);


  }

  addTask(task) {
    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.push(task);
    this.setState({
      tasks: currentListOfTasks
    });
  }
/// For the code, I will ise the similar format as above.The filter will run through the array of tasks(currentlist of tasks) and to delete/remove the one task. Then set state to allow for the event handler on the button to fire and remove the task.
/// The delete task already bound. The task id props to be called from tasklist. ! == is used to return the same equal variables.
  deleteTask(taskId) {
    let currentListOfTasks = this.state.tasks;
    let deleteFilter = currentListOfTasks.filter((task) => task.id !== taskId);
    this.setState({tasks: deleteFilter});
  }

  /// I will use .filter to work through the array and filter out the task that pass the filter test within the function.I will use.filter.
removeDone(taskId) {
  let currentListOfTasks = this.state.tasks;
    let deleteFilter = currentListOfTasks.filter((task) => task.id === taskId)[0];
  deleteFilter.completed = true;
  this.setState({tasks:currentListOfTasks});
}
    

  render() {
    return (
      <div className="container">

        <div className="row" center>
          <Header />
        </div>

        <div className="center">
          <TaskEntry onSaveTaskHandler={this.addTask} />
        </div>

        <div>
          <TaskCount tasks={this.state.tasks} />

        </div>

        <div>
          <TaskList tasks={this.state.tasks} onDeleteTaskHandler ={this.deleteTask}  onDoneTaskHandler ={this.removeDone}/>
        </div>
        
          
        
         
         
        
      </div>

    );

  }
}





export default App;