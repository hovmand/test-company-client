import React from 'react'
import { connect } from 'react-redux'
import Form from '../../components/Company/Form'

const mapStateToProps = (state) => {
	return {}
}

const CompanyForm = connect(
	mapStateToProps
)(Form)

export default CompanyForm
