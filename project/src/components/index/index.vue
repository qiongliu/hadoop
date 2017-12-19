<template>
	<div class="index">
		<div class="sl-banner">
			<carousel></carousel>
			<login-in></login-in>
		</div>
		<div class="sl-content comWidth">
			<Row :gutter="16">
				<Col span="16">
					<department></department>
				</Col>
				<Col span="8">
					<dynamic></dynamic>
				</Col>
			</Row>
			<community></community>
		</div>
	</div>
</template>

<script>
	import Carousel from 'components/carousel/carousel'
	import LoginIn from 'components/login-in/login-in'
	import Department from 'components/department/department'
	import Dynamic from 'components/dynamic/dynamic'
	import Community from 'components/community/community'
	export default {
		components: {
			Carousel,
			LoginIn,
			Department,
			Dynamic,
			Community
		}
	}
</script>

<style lang="scss">
	.sl-banner {
		position: relative;
	}
	.sl-content {
		background-color: #fff;
		border-radius: 6px;
		margin-top: 12px;
		padding: 14px;
	}
</style>