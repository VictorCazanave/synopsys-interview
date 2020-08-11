<template>
	<aside>
		<label>Manager:</label>
		<select
			:value="manager"
			@change="$emit('filter-manager', parseInt($event.target.value))"
		>
			<option
				v-for="option in managerOptions"
				:key="option.value"
				:value="option.value"
			>
				{{ option.label }}
			</option>
		</select>

		<label>Title:</label>
		<select
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

<style>
</style>
