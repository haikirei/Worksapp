import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ContactForm from './ContactForm';


const Contact = () => (

    <div className="container">
      <div className="clearfix"><br/><br/><br/></div>
      <div className="jumbotron mt">
          <h2>Stay connected?</h2>
          <div className="App">                 
        <ContactForm />           
    </div> 
      </div>
    </div>
)

export default Contact