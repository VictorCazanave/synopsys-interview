import 'whatwg-fetch'

export default {
	/**
	 * Get employees data
	 *
	 * @returns {Promise<Object[]>} List of employees
	 */
	async getEmployees() {
		const response = await fetch('./data.json')
		const data = await response.json()

		return data.map((employee) => ({
			id: employee.nodeid,
			managerId: employee.parent,
			firstName: employee.firstname,
			lastName: employee.lastname,
			title: employee.employeetitle,
			deskNumber: employee.desknumber,
			location: employee.location,
			absent: employee.outofoffice,
		}))
	},
}
