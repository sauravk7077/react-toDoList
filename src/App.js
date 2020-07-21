import React from 'react';
import './App.css';
import ToDoList from "../src/ToDoList"

class App extends React.Component{
  render() {
    return (
    <div className="center" id='main'>
      <h1>To Do List</h1>
      <ToDoList/>
    </div>)
  }
}

export default App;
