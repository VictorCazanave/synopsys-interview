import Vue from 'vue'
import VueRouter from 'vue-router'
import OverviewView from '@/views/OverviewView.vue'
import DistributionView from '@/views/DistributionView.vue'
import OrganizationView from '@/views/OrganizationView.vue'
import DetailsView from '@/views/DetailsView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		redirect: {
			name: 'overview',
		},
	},
	{
		path: '/overview',
		name: 'overview',
		component: OverviewView,
	},
	{
		path: '/distribution',
		name: 'distribution',
		component: DistributionView,
	},
	{
		path: '/organization',
		name: 'organization',
		component: OrganizationView,
	},
	{
		path: '/details',
		name: 'details',
		component: DetailsView,
	},
]

const router = new VueRouter({
	routes,
})

export default router
