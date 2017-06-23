import React from 'react'
import { connect } from 'react-redux'
import Single from '../../components/Company/Single'

const finder = match => {
	return element => {
		return element.id == match
	}
}

const mapStateToProps = (state, { match }) => {
	return {
		company: state.companies.list.find(finder(match.params.id))
	}
}

const CompanySingle = connect(
	mapStateToProps
)(Single)

export default CompanySingle
