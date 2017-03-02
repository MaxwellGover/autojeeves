import React, { PropTypes, Component } from 'react'
import { Splash } from '~/components'

export default class SplashContainer extends Component {
	static propTypes = {
		navigator: PropTypes.object.isRequired
	}
	changeScene = () => {
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