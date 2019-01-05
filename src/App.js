import React, { Component } from 'react';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <TaskList />
             </div>
    );
  }
}


export default App;
