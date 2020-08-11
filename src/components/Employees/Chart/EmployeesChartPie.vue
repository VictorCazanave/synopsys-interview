<template>
	<div
		id="chart"
		class="chart"
	></div>
</template>

<script>
// TODO: Import only necessary components
import echarts from 'echarts'

export default {
	name: 'EmployeesChartPie',
	props: {
		employees: {
			type: Array,
			required: true,
		},
	},
	computed: {
		absentEmployees() {
			return this.employees.filter((employee) => employee.absent)
		},
		workingEmployees() {
			return this.employees.filter((employee) => !employee.absent)
		},
	},
	watch: {
		employees() {
			this.displayChart()
		},
	},
	mounted() {
		this.chart = echarts.init(document.getElementById('chart'))
		this.displayChart()
	},
	methods: {
		displayChart() {
			this.chart.setOption({
				series: [{
					type: 'pie',
					radius: '50%',
					label: {
						formatter: '{b}: {c} ({d}%)',
					},
					data: [
						{
							name: 'Absent employees',
							value: this.absentEmployees.length,
						},
						{
							name: 'Working employees',
							value: this.workingEmployees.length,
						},
					],
				}],
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.chart {
	width: 75rem;
	height: 75rem;
}
</style>
