import React from 'react';
import { AppRegistry } from 'react-native';
import { AppContainer } from '~/containers'

export default function AutoJeeves () {
  return (
    <AppContainer />
  )
}

AppRegistry.registerComponent('AutoJeeves', () => AutoJeeves);