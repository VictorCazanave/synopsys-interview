<template>
	<div class="page">
		<h2 class="page__title">Overview</h2>

		<EmployeesFilters
			:manager="manager"
			:title="title"
			@filter-manager="manager = $event"
			@filter-title="title = $event"
		/>

		<EmployeesChartPie :employees="filteredEmployees" />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import EmployeesFilters from '@/components/Employees/EmployeesFilters.vue'
import EmployeesChartPie from '@/components/Employees/Chart/EmployeesChartPie.vue'

export default {
	name: 'OverviewView',
	components: {
		EmployeesFilters,
		EmployeesChartPie,
	},
	data() {
		return {
			// Default selected values
			manager: -1,
			title: '',
		}
	},
	computed: {
		...mapState(['employees']),

		filteredEmployees() {
			let filteredEmployees = this.employees

			if (this.manager > -1) {
				filteredEmployees = filteredEmployees.filter(
					(employee) => employee.managerId === this.manager,
				)
			}

			if (this.title) {
				filteredEmployees = filteredEmployees.filter((employee) => employee.title === this.title)
			}

			return filteredEmployees
		},
	},
}
</script>
