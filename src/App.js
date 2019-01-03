import React, { Component } from 'react';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={ sectionStyle}>
      <Header />
             </div>
    );
  }
}

var sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: 'url("https://ccbutcher.com/wp-content/uploads/2016/04/HN_BB_05_EasyCooking_ProRes_739-img_1280x720.png")'
};
export default App;
