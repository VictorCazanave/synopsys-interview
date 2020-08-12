<template>
	<svg
		viewBox="0 0 2000 1000"
		xmlns="http://www.w3.org/2000/svg"
		class="office"
	>
		<OfficeDesk
			v-for="deskNumber in Object.keys(DESK_POSITION)"
			:key="deskNumber"
			:position="DESK_POSITION[deskNumber]"
			:owner="getDeskOwner(deskNumber)"
		/>
	</svg>
</template>

<script>
import OfficeDesk from './OfficeDesk.vue'

export default {
	name: 'OfficeMap',
	components: {
		OfficeDesk,
	},
	props: {
		employees: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			DESK_POSITION: {
				1: [0, 3],
				2: [0, 2],
				3: [1, 2],
				4: [1, 3],
				5: [2, 3],
				6: [2, 2],
				7: [3, 2],
				8: [3, 3],
				9: [4, 3],
				10: [4, 2],
				11: [5, 2],
				12: [5, 3],
				13: [0, 1],
				14: [0, 0],
				15: [1, 0],
				16: [1, 1],
				17: [2, 1],
				18: [2, 0],
				19: [3, 0],
				20: [3, 1],
				21: [4, 1],
				22: [4, 0],
				23: [5, 0],
				24: [5, 1],
			},
		}
	},
	methods: {
		/**
		 * Get owner of desk
		 *
		 * @param {number} deskNumber - Number of desk
		 * @returns {Object} Employee who owns desk
		 */
		getDeskOwner(deskNumber) {
			return this.employees
				.find((employee) => employee.deskNumber === Number(deskNumber))
		},
	},
}
</script>

<style lang="scss" scoped>
.office {
	border: 0.25rem solid $color-black;
}
</style>
