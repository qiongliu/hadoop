<template>
	<div class="index">
		<div class="banner">
			<carousel></carousel>
			<login-in></login-in>
		</div>
		<div class="content comWidth">
			<Row :gutter="32">
				<Col span="16">
					<department></department>
				</Col>
				<Col span="8">
					汉城动态
				</Col>
			</Row>
		</div>
	</div>
</template>

<script>
	import Carousel from 'components/carousel/carousel'
	import LoginIn from 'components/login-in/login-in'
	import Department from 'components/department/department'
	export default {
		components: {
			Carousel,
			LoginIn,
			Department
		}
	}
</script>

<style lang="scss">
	.banner {
		position: relative;
	}
	.content {
		background-color: #fff;
		border-radius: 6px;
		margin-top: 12px;
	}
</style>