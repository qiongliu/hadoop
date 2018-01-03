import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		role: 0,
		belong: 0
	},
	getters: {
		role (state) {
			return state.role
		},
		belong (state) {
			return state.belong
		}
	},
	mutations: {
		role (state, role) {
			state.role = role
		},
		belong (state, belong) {
			state.belong = belong
		}
	}
});