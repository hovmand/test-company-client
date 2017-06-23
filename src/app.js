import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { logger } from 'redux-logger'

import { fetchCompanies } from './actions'
import Root from './components/Root'
import rootReducer from './reducers'

let store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		logger,
	)
)

store.dispatch(fetchCompanies())

ReactDom.render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('app')
)
