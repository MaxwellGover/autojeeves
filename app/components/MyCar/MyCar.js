import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button, Card } from 'react-native-elements'

export default function MyCar (props) {
	MyCar.propTypes = {
		make: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		year: PropTypes.number.isRequired,
		navigator: PropTypes.object.navigator,
		goToSchedule: PropTypes.func.isRequired
	}
	console.log(props)
	return (
		<Image style={styles.container} source={require('../../images/carSplash.png')}>
		<Card title='My Car' containerStyle={styles.cardContainer}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={require('../../images/races.png')}/>
			</View>
			<View style={styles.carInfoContainer}>
				<Text style={{fontSize: 28, alignText: 'center'}}>{props.year}</Text>
				<Text style={{fontSize: 48, alignText: 'center'}}>{props.make}</Text>
				<Text style={{fontSize: 48, alignText: 'center'}}>{props.model}</Text>
			</View>
			<View style={styles.buttonContainer}>
				<Button 
					title='VIEW MAINTENANCE SCHEDULE'
					buttonStyle={{borderRadius: 5, padding: 20, backgroundColor: '#ff1148'}}
					onPress={() => props.goToSchedule()}
				/>
			</View>
		</Card>
		</Image>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		resizeMode: 'cover',
    	width: undefined,
    	height: undefined,
		justifyContent: 'center',
		alignItems: 'center'
	},
	cardContainer: {
		borderRadius: 10, 
		padding: 20,
		justifyContent: 'space-between'
	},
	carInfoContainer: {
		alignItems: 'center'
	},
	buttonContainer: {
		marginTop: 40
	},
	imageContainer: {
		alignSelf: 'center'
	},
	image: {
		resizeMode: 'contain',
		height: 200
	}
})