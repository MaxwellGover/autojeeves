import React, { PropTypes, Component } from 'react'
import { View, Text, ListView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { List, ListItem } from 'react-native-elements'
import NavigationBar from 'react-native-navbar'
import { storeUserCar } from '~/redux/modules/data'

class Make extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		navigator: PropTypes.object.isRequired,
		makeData: PropTypes.array.isRequired
	}
	constructor (props) {
		super(props)
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			dataSource: this.ds.cloneWithRows(this.props.makeData)
		}
	}
	renderRow = (car) => { 
		return (
			<ListItem 
				key={car.id} 
				title={car.name} 
				onPress={() => {
					this.props.dispatch(storeUserCar(car)); 
					this.props.navigator.push({
						model: true
					})
					}
				}
				underlayColor='#eceeef' 
			/>
		) 
	}
	render () {
		return (
			<View style={{flex: 1}}>
				<NavigationBar 
					title={{title: 'Make'}}
					tintColor='#fff'
					style={{borderColor: '#e80d2d'}} />
				<View style={styles.helpTextContainer}>
					<Text style={{marginLeft: 10}}>
						Select the make of your vehicle
					</Text>
				</View>
				<List containerStyle={{flex: 1, marginTop: 0}}>
					<ListView 
						renderRow={car => this.renderRow(car)}
						dataSource={this.state.dataSource} />
				</List>
			</View>
		)
	}
}

function mapStateToProps ({data}) {
	return {
		makeData: data.makeData
	}
}

export default connect(mapStateToProps)(Make)

const styles = StyleSheet.create({
	helpTextContainer: {
		height: 30,
		backgroundColor: '#eceeef',
		justifyContent: 'center'
	}
})