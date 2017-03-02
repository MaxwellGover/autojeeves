import React, { PropTypes, Component } from 'react'
import { View, Text, ListView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { List, Card } from 'react-native-elements'
import NavigationBar from 'react-native-navbar'
import { clearData } from '~/redux/modules/data'

class Mileage extends Component {
	static propTypes = {
		schedule: PropTypes.array.isRequired,
		dispatch: PropTypes.func.isRequired,
		navigator: PropTypes.object.isRequired
	}
	constructor (props) {
		super(props)
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			dataSource: this.ds.cloneWithRows(this.props.schedule)
		}
	}
	renderRow = (item) => { 
		return (
			<Card>
				<Text style={styles.actionText}>{item.action + ' ' + item.item + ' ' + 'every ' + item.intervalMileage + ' ' + 'miles'}</Text>
				<Text style={styles.descriptionText}>{item.itemDescription}</Text>	
			</Card>
		) 
	}
	render () {
		return (
			<View style={{flex: 1}}>
				<NavigationBar 
					title={{title: 'Maintenance Schedule'}}
					tintColor='#fff'
					rightButton={
						{
							title: 'Edit', 
							tintColor: '#ff1148',
							handler: () => {
								this.props.dispatch(clearData())
								this.props.navigator.push({
									make: true
								})
							}
						}
					}
					style={{borderColor: '#e80d2d'}}
				/>
				<View style={styles.helpTextContainer}>
					<Text style={{marginLeft: 10}}>
						Sort by mileage invterval
					</Text>
				</View>
				<List containerStyle={{flex: 1, marginTop: 0}}>
					<ListView 
						renderRow={item => this.renderRow(item)}
						dataSource={this.state.dataSource}
					/>
				</List>
			</View>
		)
	}
}

function mapStateToProps ({data}) {
	return {
		schedule: data.schedule.filter(item => item.frequency > 2 && item.frequency < 7).sort((a,b) => a.intervalMileage - b.intervalMileage)
	}
}

export default connect(mapStateToProps)(Mileage)

const styles = StyleSheet.create({
	helpTextContainer: {
		height: 30,
		backgroundColor: '#eceeef',
		justifyContent: 'center'
	},
	actionText: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10
	},
	descriptionText: {
		fontSize: 12,
		color: '#9fa6ad'
	}
})