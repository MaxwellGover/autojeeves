import React, { PropTypes, Component } from 'react'
import { View, Text, ListView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { List, ListItem } from 'react-native-elements'
import NavigationBar from 'react-native-navbar'
import { storeUserYear, getSchedule } from '~/redux/modules/data'

class Year extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		navigator: PropTypes.object.isRequired,
		userCarModel: PropTypes.object.isRequired
	}
	constructor (props) {
		super(props)
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			dataSource: this.ds.cloneWithRows(this.props.userCarModel.years)
		}
	}
	renderRow = (year) => { 
		return (
			<ListItem
				key={year.id} 
				title={<Text>{year.year}</Text>}
				onPress={() => {
						this.props.dispatch(storeUserYear(year))
						this.props.dispatch(getSchedule(year.id))
						this.props.navigator.push({
							myCar: true
						})
					}
				}
			/>
		) 
	}
	render () {
		return (
			<View style={{flex: 1}}>
				<NavigationBar 
					title={{title: 'Year'}}
					tintColor='#fff'
					style={{borderColor: '#e80d2d'}}/>
				<View style={styles.helpTextContainer}>
					<Text style={{marginLeft: 10}}>
						Select the year of your vehicle
					</Text>
				</View>
				<List containerStyle={{flex: 1, marginTop: 0}}>
					<ListView 
						renderRow={model => this.renderRow(model)}
						dataSource={this.state.dataSource}/>
				</List>
			</View>
		)
	}
}

function mapStateToProps ({data}) {
	return {
		userCarModel: data.userCarModel
	}
}

export default connect(mapStateToProps)(Year)

const styles = StyleSheet.create({
	helpTextContainer: {
		height: 30,
		backgroundColor: '#eceeef',
		justifyContent: 'center'
	}
})