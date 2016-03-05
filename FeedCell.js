import React , { PropTypes } from 'react'
import { SUBMIT_ACTION2,SUBMIT_ACTION1 } from '../actions'

const FeedCell = ({cellData}) => (
  <div>
  {cellData.name}
  {cellData.rollno}
  <input type="checkbox" /><br />
  </div>
)
export default FeedCell
