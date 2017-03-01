import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'

export default function MyCar (props) {
	MyCar.propTypes = {
		make: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		year: PropTypes.number.isRequired
	}
	console.log(props)
	return (
		<View style={styles.container}>
			<View style={{flex: 1}}>
				<Image 
					style={{}}
					source={require('../../images/car.png')}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.carText}>
					You have selected a {props.year} {props.make} {props.model}.
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<Button 
					title='VIEW MAINTENENCE SCHEDULE' 
					buttonStyle={{marginBottom: 30, backgroundColor: '#e74c3c', width: 380}}
					large
				/>	
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	buttonContainer: {
		flex: 1, 
		justifyContent: 'center'
	},
	carText: {
		fontSize: 24
	}
})