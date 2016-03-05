import React, { PropTypes } from 'react'
import FeedCell from '../components/FeedCell'
import { submitAction1, submitAction2 } from '../actions'

const Attendance= ({att1}) => {
  var attendanceRecord = [];
let formRef
let attendanceRows = [];
return (
  <div>
  <form ref={(node) => formRef = node} onSubmit={e=>{
    e.preventDefault()
    console.log(attendanceRecord)
  }}>
  {attendanceRows}
  <input type="checkbox"/>
  <button type="submit">
  submit</button>
  </form>
  </div>
)
}
export default Attendance
