import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ company }) => (
	<div>
		<h1>{company.name}</h1>

		<p><Link to="/">Back</Link></p>

		<table>
			<tbody>
				<tr>
					<th>CVR</th>
					<td>{company.cvr}</td>
				</tr>
				<tr>
					<th>Name</th>
					<td>{company.name}</td>
				</tr>
				<tr>
					<th>Address</th>
					<td>{company.address}</td>
				</tr>
				<tr>
					<th>City</th>
					<td>{company.city}</td>
				</tr>
				<tr>
					<th>Country</th>
					<td>{company.country}</td>
				</tr>
				<tr>
					<th>Phone Number</th>
					<td>{company.phone_number}</td>
				</tr>
			</tbody>
		</table>
	</div>
)

export default List
