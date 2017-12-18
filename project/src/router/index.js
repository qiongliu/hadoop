import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index'
import News from 'components/news/news'
import newsDetail from 'components/news-detail/news-detail'

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
			path: '/news',
			component: News,
			children: [
			 {
			 	path: ':id',
			 	component: newsDetail
			 }
			]
		}
	]
})