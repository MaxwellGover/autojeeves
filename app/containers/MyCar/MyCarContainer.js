import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { MyCar } from '~/components'

class MyCarContainer extends Component {
	static propTypes = {
		navigator: PropTypes.object.isRequired,
		make: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		year: PropTypes.number.isRequired
	}
	render () {
		console.log(this.props)
		return (
			<MyCar 
				make={this.props.make}
				model={this.props.model}
				year={this.props.year}
			/>
		)
	}
}

function mapStateToProps ({data}) {
	return {
		make: data.userCarMake.name,
		model: data.userCarModel.name,
		year: data.userCarYear.year
	}
}

export default connect(mapStateToProps)(MyCarContainer)

