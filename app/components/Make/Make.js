import React, { PropTypes, Component } from 'react'
import { View, Text, ListView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { List, ListItem } from 'react-native-elements'
import NavigationBar from 'react-native-navbar'
import { getMakeData, storeUserCar } from '~/redux/modules/data'

// Dummy data
const list = [
  {
  	id: 1,
    name: 'Audi',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
  	id: 2,
    name: 'Buick',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

class Make extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		makeData: PropTypes.array.isRequired
	}
	constructor (props) {
		super(props)
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			dataSource: this.ds.cloneWithRows(list)
		}
	}
	componentDidMount () {
		// this.props.dispatch(getMakeData())
	}
	renderRow = (car) => { 
		return (
			<ListItem 
				key={car.id} 
				title={car.name} 
				onPress={() => this.props.dispatch(storeUserCar(car))}
				underlayColor='#eceeef' 
			/>
		) 
	}
	render () {
		console.log(this.props.makeData)
		return (
			<View style={{flex: 1}}>
				<NavigationBar 
					title={{title: 'Make'}}
					tintColor='#fff'
					style={{borderColor: '#e80d2d'}}
				/>
				<View style={styles.helpTextContainer}>
					<Text style={{marginLeft: 10}}>
						Select the make of your vehicle
					</Text>
				</View>
				<List containerStyle={{flex: 1, marginTop: 0}}>
					<ListView 
						renderRow={car => this.renderRow(car)}
						dataSource={this.state.dataSource}
					/>
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