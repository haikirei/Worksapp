import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../actions'

let RemoveTodo = ({dispatch}) => {
  return (
      <div>
        <a onClick={e => {
          e.preventDefault()
          // dispatch(deleteTodo())

          console.log(dispatch(deleteTodo()));
        }}><button type="submit">
          Remove 
        </button></a>
      </div>
  )
}

RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo