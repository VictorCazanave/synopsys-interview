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
	name: 'EmployeesChartRadar',
	props: {
		employees: {
			type: Array,
			required: true,
		},
		titles: {
			type: Array,
			required: true,
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
				legend: {
					data: ['Working employees'],
				},
				radar: {
					name: {
						textStyle: {
							color: '#f1f1f1',
							backgroundColor: '#222',
							borderRadius: 3,
							padding: [5, 5],
						},
					},
					indicator: this.titles.map((title) => ({
						name: title,
						max: this.employees.filter((employee) => employee.title === title).length,
					})),
				},
				series: [{
					type: 'radar',
					itemStyle: {
						color: '#2f4554',
					},
					data: [
						{
							name: 'Working employees',
							value: this.titles.map((title) => this.employees
								.filter((employee) => employee.title === title && !employee.absent).length),
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
