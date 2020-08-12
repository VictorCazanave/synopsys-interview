<template>
	<aside class="legend">
		<span class="occupied">
			{{occupiedDesksCount}} occupied desks
		</span>
		<span class="vacant">
			{{ vacantDesksCount}} vacant desks
		</span>
	</aside>
</template>

<script>

export default {
	name: 'OfficeLegend',
	props: {
		employees: {
			type: Array,
			required: true,
		},
	},
	computed: {
		zurichEmployees() {
			return this.employees.filter((employee) => employee.location === 'ZH')
		},
		occupiedDesksCount() {
			return this.zurichEmployees.filter((employee) => !employee.absent).length
		},
		vacantDesksCount() {
			return this.zurichEmployees.filter((employee) => employee.absent).length
		},
	},
}
</script>

<style lang="scss" scoped>
.legend {
	display: flex;
	margin-bottom: 2rem;
}

.occupied {
	margin-right: 2rem;
	color: $color-working;
}

.vacant {
	color: $color-absent;
}
</style>
