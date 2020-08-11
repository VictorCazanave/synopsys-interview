<template>
	<aside class="filters">
		<label
			for="filter-manager"
			class="label"
		>
			Manager:
		</label>
		<select
			id="filter-manager"
			:value="manager"
			@change="$emit('filter-manager', parseInt($event.target.value))"
			class="manager"
		>
			<option
				v-for="option in managerOptions"
				:key="option.value"
				:value="option.value"
			>
				{{ option.label }}
			</option>
		</select>

		<label
			for="filter-title"
			class="label"
		>
			Title:
		</label>
		<select
			id="filter-title"
			:value="title"
			@change="$emit('filter-title', $event.target.value)"
		>
			<option
				v-for="option in titleOptions"
				:key="option.value"
				:value="option.value"
			>
				{{ option.label }}
			</option>
		</select>
	</aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'EmployeesFilters',
	props: {
		manager: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
		// TODO: Replace hardcoded values
			managerOptions: [
				{
					label: 'All',
					value: -1,
				},
				{
					label: 'Earl Ballard',
					value: 0,
				},
				{
					label: 'Tamanna Chang',
					value: 1,
				},
			],
		}
	},
	computed: {
		...mapState(['titles']),

		titleOptions() {
			return [
				{
					label: 'All',
					value: '',
				},
				...this.titles.map((title) => ({
					label: title,
					value: title,
				})),
			]
		},
	},
}
</script>

<style lang="scss" scoped>
.filters {
	padding: 1.5rem 0;
	border-top: 0.125rem dashed $color-black;
	border-bottom: 0.125rem dashed $color-black;
}

.label {
	margin-right: 0.5rem;
	font-weight: bold;
}

.manager {
	margin-right: 4rem;
}
</style>
