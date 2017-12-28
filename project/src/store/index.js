import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		role: -1
	},
	getters: {
		getRole (state) {
			return state.role
		}
	},
	mutations: {
		setRole (state, r) {
			state.role = r
		}
	}
});