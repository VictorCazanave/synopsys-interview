<template>
	<div class="page">
		<h2 class="page__title">Office</h2>

		<OfficeLegend :employees="employees" />

		<OfficeMap :employees="employees" />
	</div>
</template>

<script>
import OfficeLegend from '@/components/Office/OfficeLegend.vue'
import OfficeMap from '@/components/Office/OfficeMap.vue'
import { mapState } from 'vuex'

export default {
	name: 'OfficeView',
	components: {
		OfficeLegend,
		OfficeMap,
	},
	computed: {
		...mapState(['employees']),
	},
}
</script>
