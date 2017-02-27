const STORE_MAKE_DATA = 'STORE_MAKE_DATA'
const STORE_USER_CAR = 'STORE_USER_CAR'
const STORE_USER_MODEL = 'STORE_USER_MODEL'
const STORE_USER_YEAR = 'STORE_USER_YEAR'

const initialState = {
	makeData: [],
	userCarMake: {},
	userCarModel: {},
	userCarYear: {}
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

export function storeUserModel (model) {
	return {
		type: STORE_USER_MODEL,
		model
	}
}

export function storeUserYear (year) {
	return {
		type: STORE_USER_YEAR,
		year
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
				userCarMake: action.car
			}
		case STORE_USER_MODEL : 
			return {
				...state,
				userCarModel: action.model
			}
		case STORE_USER_YEAR : 
			return {
				...state,
				userCarYear: action.year
			}
		default : 
			return state
	}
}