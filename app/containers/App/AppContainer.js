import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { AppNavigator } from '~/containers'
import { getMakeData } from '~/redux/modules/data'

class AppContainer extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired
	}
	componentDidMount () {
		// this.props.dispatch(getMakeData())
	}
	render () {
		return (
			<AppNavigator />
		)
	}
}

export default connect()(AppContainer)