import { combineReducers } from 'redux'
import {
	REQUEST_COMPANIES, RECEIVE_COMPANIES,
	RECEIVE_NEW_COMPANY,
} from '../actions'

const initialState = {
	companies: {
		list: [],
	},
}

function companies(state = initialState.companies, action) {
	switch (action.type) {
		case REQUEST_COMPANIES:
			return Object.assign({}, state, {
				isFetching: true,
			})
		case RECEIVE_COMPANIES:
			console.log(action)
			return Object.assign({}, state, {
				isFetching: false,
				list: action.list,
				lastUpdated: action.receivedAt,
			})
		case RECEIVE_NEW_COMPANY:
			let newList = state.list.slice()
			newList.push(action.company)

			return Object.assign({}, state, {
				list: newList,
			})
		default:
			return state
	}
}

const rootReducer = combineReducers({
	companies,
})

export default rootReducer
