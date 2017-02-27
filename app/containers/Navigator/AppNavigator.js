import React, { PropTypes, Component } from 'react'
import { View, Text, Navigator } from 'react-native'
import { SplashContainer } from '~/containers'
import { Make, Model, Year } from '~/components'

export default class AppNavigator extends Component {
	renderScene = (route, navigator) => {
		if (route.make === true) {
			return <Make navigator={navigator}/>
		} else if (route.model === true) {
			return <Model navigator={navigator} />
		} else if (route.year === true) {
			return <Year navigator={navigator} />
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