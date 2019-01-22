import React, { Component } from 'react';
import Header from './Components/Header';
import TaskEntry from './Components/TaskEntry';
import TaskList from './Components/TaskList';
import TaskCount from './Components/TaskCount';


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

        <div className="center">
          <TaskEntry onSaveTaskHandler={this.addTask} />
        </div>

        <div>
          <taskCount tasks={this.state.tasks} />

        </div>

        <div>
          <TaskList tasks={this.state.tasks} />
        </div>
        
      </div>

    );

  }
}





export default App;