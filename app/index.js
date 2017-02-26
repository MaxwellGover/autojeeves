import React from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { AppContainer } from '~/containers'
import * as reducers from '~/redux'
import devTools from 'remote-redux-devtools'

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunk),
    devTools()
  )
)

export default function AutoJeeves () {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

AppRegistry.registerComponent('AutoJeeves', () => AutoJeeves);