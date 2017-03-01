import React, { PropTypes, Component } from 'react'
import { View, Text, ListView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { List, ListItem } from 'react-native-elements'
import NavigationBar from 'react-native-navbar'
import { storeUserModel } from '~/redux/modules/data'

class Model extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		navigator: PropTypes.object.isRequired,
		userCarMake: PropTypes.object.isRequired
	}
	constructor (props) {
		super(props)
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			dataSource: this.ds.cloneWithRows(this.props.userCarMake.models)
		}
	}
	renderRow = (model) => { 
		return (
			<ListItem 
				key={model.id} 
				title={model.name} 
				onPress={() => {
					this.props.dispatch(storeUserModel(model))
					this.props.navigator.push({
						year: true
					})
					}
				}
				underlayColor='#eceeef' 
			/>
		) 
	}
	render () {
		console.log(this.props.userCarMake)
		return (
			<View style={{flex: 1}}>
				<NavigationBar 
					title={{title: 'Model'}}
					tintColor='#fff'
					style={{borderColor: '#e80d2d'}}
				/>
				<View style={styles.helpTextContainer}>
					<Text style={{marginLeft: 10}}>
						Select the model of your vehicle
					</Text>
				</View>
				<List containerStyle={{flex: 1, marginTop: 0}}>
					<ListView 
						renderRow={model => this.renderRow(model)}
						dataSource={this.state.dataSource}
					/>
				</List>
			</View>
		)
	}
}

function mapStateToProps ({data}) {
	return {
		userCarMake: data.userCarMake
	}
}

export default connect(mapStateToProps)(Model)

const styles = StyleSheet.create({
	helpTextContainer: {
		height: 30,
		backgroundColor: '#eceeef',
		justifyContent: 'center'
	}
})