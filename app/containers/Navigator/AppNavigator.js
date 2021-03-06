import React, { PropTypes, Component } from 'react'
import { View, Text, Navigator } from 'react-native'
import { SplashContainer, MyCarContainer, FooterTabsContainer } from '~/containers'
import { Make, Model, Year } from '~/components'

export default class AppNavigator extends Component {
	renderScene = (route, navigator) => {
		if (route.make === true) {
			return <Make navigator={navigator}/>
		} else if (route.model === true) {
			return <Model navigator={navigator} />
		} else if (route.year === true) {
			return <Year navigator={navigator} />
		} else if (route.myCar === true) {
			return <MyCarContainer navigator={navigator}/>
		} else if (route.schedule === true) {
			return <FooterTabsContainer navigator={navigator} />
		}
		return <SplashContainer navigator={navigator} />
	}
	configureScene = (route) => {
		if (route.model === true || route.year === true || route.schedule === true) {
			return Navigator.SceneConfigs.PushFromRight
		}
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