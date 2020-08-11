<template>
	<div class="page">
		<h2 class="page__title">Distribution</h2>

		<EmployeesChartRadar
			:employees="employees"
			:titles="titles"
		/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import EmployeesChartRadar from '@/components/Employees/Chart/EmployeesChartRadar.vue'

export default {
	name: 'DistributionView',
	components: {
		EmployeesChartRadar,
	},
	data() {
		return {
		}
	},
	computed: {
		...mapState(['employees', 'titles']),
	},
}
</script>
