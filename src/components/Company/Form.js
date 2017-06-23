import React, { Component } from 'react'
import { addCompany } from '../../actions'
import { Redirect } from 'react-router-dom'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {}

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleInputChange(event) {
		let target = event.target
		let value = target.type === 'checkbox' ? target.checked : target.value
		let name = target.name

		this.setState({[name]: value})
	}

	handleSubmit(event) {
		event.preventDefault()

		this.props.dispatch(addCompany(this.state))
			.then(company => this.setState({'insertedId': company.id}))
	}

	render() {
		return (
			<div>
				{this.state.insertedId > 0 ? (
					<Redirect to={'/company/' + this.state.insertedId} />
				) : (
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="cvr">CVR</label>
						<input type="text" name="cvr" id="cvr" required onChange={this.handleInputChange} />

						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" required onChange={this.handleInputChange} />

						<label htmlFor="address">Address</label>
						<input type="text" name="address" id="address" required onChange={this.handleInputChange} />

						<label htmlFor="city">City</label>
						<input type="text" name="city" id="city" required onChange={this.handleInputChange} />

						<label htmlFor="country">Country</label>
						<input type="text" name="country" id="country" required onChange={this.handleInputChange} />

						<label htmlFor="phone_number">Phone number</label>
						<input type="text" name="phone_number" id="phone_number" onChange={this.handleInputChange} />

						<input type="submit" value="Add" />
					</form>
				)}
			</div>
		)
	}
}

export default Form
