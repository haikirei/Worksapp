import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibileTodoList from '../containers/VisibleTodoList';

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="clearfix"><br/><br/><br/></div>
          <div className="jumbotron">
              <h2>Manage your tasks</h2>
    <AddTodo />
    <VisibileTodoList />
    <Footer />
            </div>
          </div>
    );
  }
}

export default App