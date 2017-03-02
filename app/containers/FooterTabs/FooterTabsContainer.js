import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { FooterTabs } from '~/components'
import { setFooterTab } from '~/redux/modules/activeFooterTab'

class FooterTabsContainer extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		navigator: PropTypes.object.navigator,
		activeFooterTab: PropTypes.string.isRequired
	}
	render () {
		console.log('FooterTabContainers props are', this.props)
		return (
			<FooterTabs 
				activeFooterTab={this.props.activeFooterTab}
				navigator={this.props.navigator}
				onTabSelect={(tab) => this.props.dispatch(setFooterTab(tab))}
			/>
		)
	}
}

function mapStateToProps ({activeFooterTab}) {
	return {
		activeFooterTab
	}
}

export default connect(mapStateToProps)(FooterTabsContainer)