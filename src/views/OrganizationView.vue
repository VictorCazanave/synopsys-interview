<template>
	<div class="page">
		<h2 class="page__title">Organization</h2>

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
	computed: {
		...mapState(['employees']),
	},
}
</script>
