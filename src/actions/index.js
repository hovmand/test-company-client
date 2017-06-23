import fetch from 'isomorphic-fetch'

//const url = 'http://localhost:4567/'
const url = 'https://secure-brushlands-54660.herokuapp.com/'

export const REQUEST_COMPANIES = 'REQUEST_COMPANIES';
function requestCompanies() {
	return {
		type: REQUEST_COMPANIES,
	}
}

export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
function receiveCompanies(json) {
	return {
		type: RECEIVE_COMPANIES,
		list: json,
		receivedAt: Date.now(),
	}
}

export function fetchCompanies() {
	return function (dispatch) {
		dispatch(requestCompanies())

		return fetch(url + 'company')
			.then(response => response.json())
			.then(json => dispatch(receiveCompanies(json)))
	}
}

export const REQUEST_NEW_COMPANY = 'REQUEST_NEW_COMPANY';
function requestNewCompany() {
	return {
		type: REQUEST_NEW_COMPANY,
	}
}

export const RECEIVE_NEW_COMPANY = 'RECEIVE_NEW_COMPANY';
function receiveNewCompany(json) {
	return {
		type: RECEIVE_NEW_COMPANY,
		company: json,
		receivedAt: Date.now(),
	}
}

export function addCompany(data) {
	return function (dispatch) {
		dispatch(requestNewCompany())

		let init = {
			method: 'POST',
			body: JSON.stringify(data),
		}

		return fetch(url + 'company', init)
			.then(response => response.json())
			.then(json => { dispatch(receiveNewCompany(json)); return json })
	}
}
