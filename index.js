import React from 'react'
import { render } from 'react-dom'
import  App  from './containers/App'
import { createStore } from 'redux'
import rooReducer from './reducers'
import configureStore from './store/configureStore'

const store = configureStore(rooReducer)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
