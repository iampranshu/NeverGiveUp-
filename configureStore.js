import { createStore } from 'redux'
import rooReducer from '../reducers'

export default function configureStore() {
  return createStore(
    rooReducer
  )
}
