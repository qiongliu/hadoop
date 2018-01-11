<template>
	<div class="my-top">
		<Affix>
			<my-nav :navList="navList">
				<div class="sl-logo fl">
					<img src="./logo-w.png" :alt="logoAlt">
				</div>
			</my-nav>
		</Affix>
	</div>
</template>

<script>
	import axios from 'axios'
	import myNav from 'base/my-nav/my-nav'
	export default {
		components: {
			myNav
		},
		data () {
			return {
				logoAlt: '',
				navList: []
			}
		},
		created () {
			this._getData()
		},
		methods: {
			_getData () {
				this.logoAlt = '汉城街道综合管理服务平台'
				this.navList = [
					{
						id: 0,
						name: '首页',
						url: '/index'
					},
					{
						id: 1,
						name: '汉城动态',
						url: '/dynamicList'
					},
					{
						id: 2,
						name: '亮点（重点）工作',
						url: 'news'
					},
					{
						id: 3,
						name: '新闻公告',
						url: ''
					},
					{
						id: 4,
						name: '便民服务中心',
						url: '',
						sub: [
							{
								id: 41,
								name: '劳动保障',
								url: ''
							},
							{
								id: 42,
								name: '社保',
								url: ''
							}
						]
					},
					{
						id: 5,
						name: '资源中心',
						url: ''
					},
				]
				// axios.get('/navList').then((res) => {
				// 	console.log(res);
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/variable";
	.my-top {
		height: 60px;
	}
	.sl-logo {
		margin-right: 12px;
		img {
			vertical-align: middle;
		}
	}
	.ivu-affix {
    z-index: 11;
	}
</style>


