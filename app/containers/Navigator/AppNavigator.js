import React, { PropTypes, Component } from 'react'
import { View, Text, Navigator } from 'react-native'
import { SplashContainer, MakeContainer } from '~/containers'

export default class AppNavigator extends Component {
	renderScene = (route, navigator) => {
		if (route.make === true) {
			return <MakeContainer navigator={navigator}/>
		}
		return <SplashContainer navigator={navigator} />
	}
	configureScene = (route) => {
		return Navigator.SceneConfigs.FloatFromBottom
	}
	render () {
		return (
			<Navigator 
				initialRoute={{}}
				renderScene={this.renderScene}
				configureScene={this.configureScene}
			/>
		)
	}
}