import React from 'react'
import { connect } from 'react-redux'
import List from '../../components/Company/List'

const mapStateToProps = (state) => {
	return {
		companies: state.companies.list
	}
}

const CompanyList = connect(
	mapStateToProps
)(List)

export default CompanyList
