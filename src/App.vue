<template>
	<div id="app">
		<h1>Employees Overview</h1>
		<TheNav />
		<router-view v-if="employees" />
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TheNav from '@/components/TheNav.vue'

export default {
	name: 'App',
	components: {
		TheNav,
	},
	computed: {
		...mapState(['employees']),
	},
	created() {
		// TODO: Handle loading and errors
		this.fetchEmployees()
	},
	methods: {
		...mapActions(['fetchEmployees']),
	},
}
</script>

<style lang="scss">
</style>
