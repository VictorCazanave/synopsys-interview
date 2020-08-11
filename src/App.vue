<template>
	<div
		id="app"
		class="app"
	>
		<div class="sidebar">
			<h1 class="title">Status of Employees</h1>
			<TheNav />
		</div>

		<router-view
			v-if="employees"
			class="content"
		/>
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

<style lang="scss" scoped>
.app {
	display: flex;
}

.sidebar {
	flex: 0 0 25rem;
	padding: 1.5rem;
	border-right: 0.125rem dashed $color-black;
	text-align: center;
}

.title {
	margin-bottom: 2rem;
	padding-bottom: 2rem;
	border-bottom: 0.25rem solid $color-black;
	font-size: 3rem;
	font-weight: bold;
	text-transform: uppercase;
}

.content {
	flex: 1 1 auto;
}
</style>
