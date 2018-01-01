import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index'
import DynamicList from 'components/dynamic-list/dynamic-list'
import DynamicDetail from 'components/dynamic-detail/dynamic-detail'
import DynamicWrite from 'components/dynamic-write/dynamic-write'
import Information from 'components/Information/Information'

Vue.use(Router)

export default new Router ({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/index',
			component: Index
		},
		{
			path: '/dynamicList',
			component: DynamicList,
			children: [
				{
					path: ':id',
					component: DynamicDetail
				}
			]
		},
		{
			path: '/dynamicWrite',
			component: DynamicWrite
		},
		{
			path: '/information',
			component: Information,
			name: 'information'
		}
	]
})