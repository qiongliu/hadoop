import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		role: 0
	},
	getters: {
		role (state) {
			return state.role
		}
	},
	mutations: {
		role (state, r) {
			state.role = r
		}
	}
});