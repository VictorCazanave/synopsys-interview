<template>
	<div class="page">
		<h2 class="page__title">Details</h2>

		<VueGoodTable
			:columns="columns"
			:rows="employees"
		>
			<template #table-row="{column, row, formattedRow}">
				<span v-if="column.field == 'absent'">
					<span :class="row.absent ? 'absent' : 'working'">
						{{ row.absent ? 'Absent' : 'Working' }}
					</span>
				</span>
				<span v-else>
					{{ formattedRow[column.field] }}
				</span>
			</template>
		</VueGoodTable>

	</div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
import { mapState } from 'vuex'

export default {
	name: 'DetailsView',
	components: {
		VueGoodTable,
	},
	data() {
		return {
			columns: [
				{
					label: 'ID',
					field: 'id',
					type: 'number',
				},
				{
					label: 'First Name',
					field: 'firstName',
				},
				{
					label: 'Last Name',
					field: 'lastName',
				},
				{
					label: 'Title',
					field: 'title',
				},
				{
					label: 'Manager ID',
					field: 'managerId',
					type: 'number',
				},
				{
					label: 'Desk Number',
					field: 'deskNumber',
					type: 'number',
				},
				{
					label: 'Absent',
					field: 'absent',
					type: 'boolean',
				},
			],
		}
	},
	computed: {
		...mapState(['employees']),
	},
}
</script>

<style lang="scss" scoped>
.absent {
	color: $color-absent;
}

.working {
	color: $color-working;
}
</style>
