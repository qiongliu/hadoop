<template>
	<div class="top">
		<div class="container clearfix">
			<div class="logo fl">
				<img src="./1.png" :alt="logoAlt">
			</div>
			<ul class="nav fr">
				<li v-for="(item,index) in navList">
					<a href="javascript:;" :class="{}">{{item.name}}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
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
						href: ''
					},
					{
						name: '空间',
						href: ''
					},
					{
						name: '新闻',
						href: ''
					},
					{
						name: '视频',
						href: ''
					}
				]
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
			display: inline-block;
		}
		a {
			font-size: $fz-md;
			color: #fff;
			padding: 0 20px;
		}
	}
</style>


