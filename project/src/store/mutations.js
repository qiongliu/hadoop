import * as types from './mutation-types'

const mutations = {
	[types.SET_ROLE] (state,role) {
		state.role = role
	}
}

export default mutations