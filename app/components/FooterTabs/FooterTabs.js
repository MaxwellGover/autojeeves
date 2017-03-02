import React, { PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Mileage, Month } from '~/components'

export default function FooterTabs (props) {
	FooterTabs.propTypes = {
		activeFooterTab: PropTypes.string.isRequired,
		onTabSelect: PropTypes.func.isRequired,
		navigator: PropTypes.object.isRequired
	}
	console.log('Here', props)
	return (
		<Tabs>
			<Tab
				onPress={() => props.onTabSelect('mileage')}
				renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} type='ionicon' name='ios-car-outline' size={35}/>}
				selected={props.activeFooterTab === 'mileage'}
				renderSelectedIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#ff1148'} type='ionicon' name='ios-car-outline' size={35} />}>
				<Mileage navigator={props.navigator}/>
			</Tab>
			<Tab
				onPress={() => props.onTabSelect('months')}
				renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} type='ionicon' name='ios-calendar-outline' size={35}/>}
				selected={props.activeFooterTab === 'months'}
				renderSelectedIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#ff1148'} type='ionicon' name='ios-calendar-outline' size={35} />}>
				<Month navigator={props.navigator}/>
			</Tab>
		</Tabs>
	)
}

const styles = StyleSheet.create({
	
})