import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ companies }) => (
	<div>
		<h1>List of companies</h1>
		<p><Link to="/add">Add new</Link></p>
		{companies.length > 0 ? (
			<table>
				<thead>
					<tr>
						<th>CVR</th>
						<th>Name</th>
						<th>Address</th>
						<th>City</th>
						<th>Country</th>
						<th>Phone Number</th>
					</tr>
				</thead>
				<tbody>
				{companies.map(company =>
					<tr key={company.id}>
						<td>{company.cvr}</td>
						<td><Link to={"/company/" + company.id}>{company.name}</Link></td>
						<td>{company.address}</td>
						<td>{company.city}</td>
						<td>{company.country}</td>
						<td>{company.phone_number}</td>
					</tr>
				)}
				</tbody>
			</table>
		) : (
			<p>No companies found, you could create some.</p>
		)}
	</div>
)

export default List
