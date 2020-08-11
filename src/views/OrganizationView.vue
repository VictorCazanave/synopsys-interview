<template>
	<div>
		<h2>Organization</h2>

		<EmployeesChartTree :employees="employees" />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import EmployeesChartTree from '@/components/Employees/Chart/EmployeesChartTree.vue'

export default {
	name: 'OrganizationView',
	components: {
		EmployeesChartTree,
	},
	data() {
		return {
		}
	},
	computed: {
		...mapState(['employees']),
	},
}
</script>
