<template>
	<div class="index">
		<div class="sl-banner">
			<carousel></carousel>
			<login-in></login-in>
		</div>
		<div class="sl-content comWidth">
			<highlight-work></highlight-work>
			<!-- <my-pie></my-pie> -->
			<my-collapse :max-height="420">
				<Row :gutter="16">
					<Col span="16">
						<department></department>
					</Col>
					<Col span="8">
						<dynamic></dynamic>
					</Col>
				</Row>
			</my-collapse>
			<my-collapse :max-height="510">
				<community></community>
			</my-collapse>
		</div>
		<BackTop></BackTop>
	</div>
</template>

<script>
	import Carousel from 'components/carousel/carousel'
	import LoginIn from 'components/login-in/login-in'
	import Department from 'components/department/department'
	import Dynamic from 'components/dynamic/dynamic'
	import Community from 'components/community/community'
	import myCollapse from 'base/my-collapse/my-collapse'
	import myPie from 'base/my-echarts/my-pie'
	import HighlightWork from 'components/highlight-work/highlight-work'
	export default {
		components: {
			Carousel,
			LoginIn,
			Department,
			Dynamic,
			Community,
			myCollapse,
			myPie,
			HighlightWork
		}
	}
</script>

<style lang="scss">
	.index {
		.sl-banner {
			position: relative;
		}
		.sl-content {
			background-color: #fff;
			border-radius: 6px;
			margin-top: 12px;
			padding: 14px;
		}	
	}
</style>