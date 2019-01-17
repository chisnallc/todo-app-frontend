import React, { Component } from 'react';
import Header from './Components/Header';
import TaskEntry from './Components/TaskEntry';
import TaskList from './Components/TaskList';


class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
  }
  
  addTask(task){
    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.push(task);
    this.setState({
     tasks:currentListOfTasks 
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <TaskEntry onSaveTaskHandler={this.addTask} />
        <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
