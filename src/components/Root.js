import React from 'react'
import {
	BrowserRouter,
	Route,
	Link,
} from 'react-router-dom'
import Add from '../components/Company/Add'
import List from '../containers/Company/List'
import Single from '../containers/Company/Single'

const Root = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/" component={List} />
			<Route path="/company/:id" component={Single} />
			<Route exact path="/add" component={Add} />
		</div>
	</BrowserRouter>
)

export default Root
