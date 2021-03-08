import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <div className="clearfix"><br/><br/><br/></div>
        <div className="jumbotron">
            <h2>Welcome</h2>
            <p>To Worksapp task manager.</p>
        </div>
      </main>
    );
  }
}

export default App
