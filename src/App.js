import React, { Component } from 'react';
import Header from './Components/Header';
import TaskEntry from './Components/TaskEntry';
import TaskList from './Components/TaskList';
import taskCount from './Components/taskCount';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    this.addTask = this.addTask.bind(this);



  }

  addTask(task) {
    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.push(task);
    this.setState({
      tasks: currentListOfTasks
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row" center>
          <Header />
        </div>
        <div className="centre">
        </div>
        <TaskEntry onSaveTaskHandler={this.addTask} />
      </div>

      <div className="row">
        <taskCount tasks={this.state.tasks} />
      </div>
      <TaskList tasks={this.state.tasks} />
        <div/>

          );
          }
}


export default App;