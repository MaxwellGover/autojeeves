import React from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { AppContainer } from '~/containers'
import * as reducers from '~/redux'

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
)

export default function AutoJeeves () {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

AppRegistry.registerComponent('AutoJeeves', () => AutoJeeves);