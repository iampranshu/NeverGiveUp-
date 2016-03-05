import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MOCK_DATA from '../sample-data'
import Attendance from './Attendance'
import { submitAction1 } from '../actions'

export default class App extends Component {
  constructor(props){
  super(props)
}
render() {
  const { dispatch,input1 } = this.props
  let input
  return(
    <div><hr/>
Demo: {input}
<hr/>
This is a App Container!! : {input1}    
    <Attendance att1={MOCK_DATA} />
    </div>
  )
}
}
function mapStateToProps(state) {
  const{ input1 } = state
  console.log(input1)
  return{
    input1
  }
}
export default connect(mapStateToProps)(App)
