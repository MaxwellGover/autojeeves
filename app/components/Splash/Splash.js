import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'

export default function Splash (props) {
	Splash.propTypes = {
		changeScene: PropTypes.func.isRequired
	}
	return (
		<Image 
			style={styles.container}
			source={require('../../images/splash.jpg')}
		>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('../../images/logo.png')}
				>	
				</Image>
			</View>
			<View style={styles.buttonContainer}>
				<Button 
					title='CONTINUE' 
					buttonStyle={{marginBottom: 30, backgroundColor: '#e74c3c', width: 380}}
					large
					onPress={props.changeScene}
				/>	
			</View>
		</Image>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	resizeMode: 'cover',
    	width: undefined,
    	height: undefined,
    	backgroundColor:'transparent',
    	justifyContent: 'center',
    	alignItems: 'center'
	},
	imageContainer: {
		flex: 1,
		marginTop: 50,
		justifyContent: 'flex-start'
	},
	image: {
		resizeMode: 'contain',
		height: 150
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'flex-end'
	}
})