const STORE_MAKE_DATA = 'STORE_MAKE_DATA'
const STORE_USER_CAR = 'STORE_USER_CAR'

const initialState = {
	makeData: [],
	userCar: {}
}

export function storeMakeData (data) {
	return {
		type: STORE_MAKE_DATA,
		data
	}
}

export function storeUserCar (car) {
	return {
		type: STORE_USER_CAR,
		car
	}
}

export function getMakeData () {
	return function (dispatch, getState) {
		console.log('Getting data...')
		const endpoint = 'http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=rxmjqw6pxtyfh86ysq9g7a78'
		fetch(endpoint)
  			.then(response => response.json())
  			.then(data => dispatch(storeMakeData(data.makes)))
  			.catch((error) => {
        		console.error(error);
      		});
	}
}

export default function data (state = initialState, action) {
	switch (action.type) {
		case STORE_MAKE_DATA : 
			return {
				...state,
				makeData: action.data
			}
		case STORE_USER_CAR : 
			return {
				...state,
				userCar: action.car
			}
		default : 
			return state
	}
}