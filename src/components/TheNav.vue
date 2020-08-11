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
					class="link"
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
.link {
	display: block;
	padding: 1rem;
	font-size: 2rem;
	font-weight: bold;

	&:focus,
	&:hover {
		background-color: $color-grey;
	}

	&[aria-current="page"] {
		background-color: $color-black;
		color: $color-white;
	}
}
</style>
