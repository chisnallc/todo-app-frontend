import React, { Component } from 'react';
import Header from './Components/Header';
import TaskEntry from './Components/TaskEntry';
import TaskList from './Components/TaskList';
import TaskCount from './Components/TaskCounter';
import TasksService from './service/tasks';



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

  async componentDidMount() {//this is fired after the render
    const tasks = await TasksService.getTasks();

    this.setState({ tasks: tasks }); ///tasks loaded into database and set into state.
  }

  async addTask(task) {///have to make sure that the function is declared asyc. addTask is originally triggered from taskEntry

    const response = await TasksService.saveTask(task); ///takes in code from the tasks.js for aaddTask(takes in task object)

    task.taskId = response.insertId; ///Takes the property task.this makes sure that the right id is associated to task added as per database.

    ///the API responds with the taskId. The task gets put into state

    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.push(task);
    this.setState({
      tasks: currentListOfTasks
    });
  }
  /// For the code, I will ise the similar format as above.The filter will run through the array of tasks(currentlist of tasks) and to delete/remove the one task. Then set state to allow for the event handler on the button to fire and remove the task.
  /// The delete task already bound. The task id props to be called from tasklist. ! == is used to return the same equal variables.
  async deleteTask(taskId) {
    const response = await TasksService.deleteTask(taskId);

    let currentListOfTasks = this.state.tasks;
    let deleteFilter = currentListOfTasks.filter((task) => task.taskId !== taskId);
    this.setState({ tasks: deleteFilter });
  }


  /// I will use .filter to work through the array and filter out the task that pass the filter test within the function.I will use.filter.
  async removeDone(taskId) {

const response = await TasksService.removeDone(taskId);

    let currentListOfTasks = this.state.tasks;
    let doneFilter = currentListOfTasks.find((task) => task.taskId === taskId);
    doneFilter.taskCompleted = true;
    this.setState({ tasks: currentListOfTasks });
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
          <TaskList tasks={this.state.tasks} onDeleteTaskHandler={this.deleteTask} 
          onDoneTaskHandler={this.removeDone} />
        </div>






      </div>

    );

  }
}





export default App;