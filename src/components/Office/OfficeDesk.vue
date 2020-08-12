<template>
	<g>
		<rect
			:x="xPosition"
			:y="yPosition"
			:width="DESK_SIZE"
			:height="DESK_SIZE"
			class="desk"
			:class="{ vacant: owner.absent }"
		></rect>
		<text
			:x="xPosition + 100"
			:y="yPosition + 100"
			class="number"
		>
			{{ owner.deskNumber }}
		</text>
	</g>
</template>

<script>
const OFFICE_PADDING = 100
const SPACE_BETWEEN_DESKS = 50
const SPACE_BETWEEN_BLOCKS = 100
const DESK_SIZE = 150

// TODO: Add tooltip with employee information
export default {
	name: 'OfficeDesk',
	props: {
		position: {
			type: Array,
			required: true,
		},
		owner: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			DESK_SIZE,
		}
	},
	computed: {
		xPosition() {
			const [x] = this.position
			let extraSpace = 0

			if (x > 3) {
				extraSpace = 2 * SPACE_BETWEEN_BLOCKS
			} else if (x > 1) {
				extraSpace = SPACE_BETWEEN_BLOCKS
			}

			return x * (DESK_SIZE + SPACE_BETWEEN_DESKS) + OFFICE_PADDING + extraSpace
		},
		yPosition() {
			const [, y] = this.position
			const extraSpace = y > 1 ? SPACE_BETWEEN_BLOCKS : 0

			return y * (DESK_SIZE + SPACE_BETWEEN_DESKS) + OFFICE_PADDING + extraSpace
		},
	},
}
</script>

<style lang="scss" scoped>
.desk {
	stroke: $color-working;
	stroke-width: 3;
	fill: $color-white;
	cursor: help;

	&.vacant {
		stroke: $color-absent;
	}
}

.number {
	font-size: 2rem;
	color: $color-working;
	cursor: help;
}
</style>
