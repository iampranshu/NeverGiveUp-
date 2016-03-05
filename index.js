import { combineReducers } from 'redux'
import { SUBMIT_ACTION1 } from '../actions'


const initialState = {
  isFetching: true
}
export default function rooReducer(state=initialState, action){
  console.log('hello')
  switch(action.type){
    case SUBMIT_ACTION1:
    state= Object.assign({}, state, {input1: action.input})
    console.log(action)
    return state
    default:
    return state
  }
}
