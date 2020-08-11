<template>
	<nav>
		<ul>
			<li
				v-for="link in links"
				:key="link.route"
			>
				<router-link
					:to="{ name: link.route }"
					:aria-current="$route.name === link.route ? 'page' : null"
				>
					{{ link.label }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'TheNav',
	data() {
		return {
			links: [
				{
					label: 'Overview',
					route: 'overview',
				},
				{
					label: 'Distribution',
					route: 'distribution',
				},
				{
					label: 'Organization',
					route: 'organization',
				},
				{
					label: 'Map of Office',
					route: 'map',
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
</style>
