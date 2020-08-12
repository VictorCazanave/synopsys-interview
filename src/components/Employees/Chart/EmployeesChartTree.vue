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
	name: 'EmployeesChartTree',
	props: {
		employees: {
			type: Array,
			required: true,
		},
	},
	computed: {
		// TODO: Generate tree data instead of hardcoded
		employeesTree() {
			return [{
				...this.getEmployeeTreeData(this.employees.find((employee) => employee.id === 0)),
				children: [
					...this.employees
						.filter((employee) => employee.managerId === 0 && employee.id !== 1) // Exclude manager
						.map(this.getEmployeeTreeData),
					{
						...this.getEmployeeTreeData(this.employees.find((employee) => employee.id === 1)),
						name: 'Tamanna Chang',
						children: this.employees
							.filter((employee) => employee.managerId === 1)
							.map(this.getEmployeeTreeData),
					},
				],
			}]
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
		/**
		 * Get employee data formatted for tree chart
		 *
		 * @param {Object} employee - Employee raw data
		 * @returns {Object} Formatted data
		 */
		getEmployeeTreeData(employee) {
			return {
				name: `${employee.firstName} ${employee.lastName}`,
				value: employee.absent ? 'Absent' : 'Working',
				itemStyle: {
					borderWidth: 2,
					borderColor: employee.absent ? '#c23531' : '#2f4554',
				},
			}
		},

		displayChart() {
			this.chart.setOption({
				series: [{
					type: 'tree',
					orient: 'vertical',
					label: {
						position: 'top',
						rotate: -90,
						verticalAlign: 'middle',
						align: 'right',
						fontSize: 12,
					},

					leaves: {
						label: {
							position: 'bottom',
							rotate: -90,
							verticalAlign: 'middle',
							align: 'left',
						},
					},
					data: this.employeesTree,
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
