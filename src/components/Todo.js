import React from 'react';
import PropTypes from 'prop-types';
import RemoveTodo from '../containers/RemoveTodo'
import './styles.css'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <div className='rowA'>{text} &nbsp; <RemoveTodo /></div>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;