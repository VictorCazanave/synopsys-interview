import Vue from 'vue'
import Vuex from 'vuex'
import SERVICES from '@/services'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		employees: null,

		// TODO: Replace hardcoded values
		titles: [
			'R&D Engineer Sr Manager',
			'R&D Engineer Sr I',
			'R&D Engineer Sr II',
			'R&D Engineer I',
			'R&D Engineer II',
			'R&D Engineer, Staff',
		],
	},
	mutations: {
		/**
		 * Set employees
		 *
	 	 * @param {Object} state - State of store
		 * @param {Object[]} employees - List of employees
		 * @returns {undefined}
		 */
		setEmployees(state, employees) {
			state.employees = employees
		},
	},
	actions: {
		/**
		 * Fetch employees
		 *
		 * @param {Object} - Context of store
		 * @returns {Promise} No data
		 */
		async fetchEmployees({ commit }) {
			const employees = await SERVICES.getEmployees()

			commit('setEmployees', employees)
		},
	},
})
