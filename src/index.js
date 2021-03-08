import React from 'react'
import {render} from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import App from './components/App'
import Manage from './components/Manage'
import Contact from './components/Contact'
import registerServiceWorker from './components/registerServiceWorker'
import Logo from './static/rr4_s.png'

render(
  <Router>
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top mb">
        <NavLink className="navbar-brand" to="/"> <img src={Logo} alt="React Router v4" /> </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#TopNavbar" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="TopNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Manage">Manage</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Route exact path="/" component={App}/>
      <Route path="/Manage" component={Manage}/>
      <Route path="/Contact" component={Contact}/>
    </div>
  </Router>,

document.getElementById('root'))

registerServiceWorker()
