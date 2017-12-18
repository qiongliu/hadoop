<template>
	<div class="top">
		<div class="comWidth clearfix">
			<div class="logo fl">
				<img src="./logo-w.png" :alt="logoAlt">
			</div>
			<ul class="nav fr">
				<li v-for="(item,index) in navList">
					<router-link :to="item.href">{{item.name}}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
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
						name: '首页',
						href: 'index'
					},
					{
						name: '空间',
						href: ''
					},
					{
						name: '新闻',
						href: 'news'
					},
					{
						name: '视频',
						href: ''
					}
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

	.top {
		height: 60px;
		line-height: 60px;
		background-color: $c-bg-top;
		img {
			height: 40px;
			vertical-align: middle;
		}
	}
	.nav {
		li {
			float: left;
		}
		a {
			display: block;
			font-size: $fz-md;
			color: #fff;
			padding: 0 20px;
		}
	}
</style>


