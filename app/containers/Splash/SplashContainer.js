import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Splash } from '~/components'

export default class SplashContainer extends Component {
	static propTypes = {
		navigator: PropTypes.object.isRequired
	}
	changeScene = () => {
		console.log('Changing scene')
		this.props.navigator.push({
			make: true
		})
	}
	render () {
		return (
			<Splash navigator={this.props.navigator} changeScene={this.changeScene} />
		)
	}
}