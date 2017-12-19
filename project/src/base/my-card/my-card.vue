<template>
	<div class="sl-card">
		<Card class="sl-card-item">
			<p slot="title">{{info.name}}</p>
			<a href="javascript:;" slot="extra"><Icon class="more" type="more"></Icon></a>
			<p>{{info.intr}}</p>
			<Tag color="blue">{{info.leader}}</Tag>
			<Tag>{{info.num}}</Tag>
		</Card>
	</div>
</template>

<script>
	export default {
		props: {
			info: {
				type: Object,
				default: {}
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/variable.scss';
	.sl-card {
		.sl-card-item {
			width: 152px;
			// max-height: 240px;
			margin-bottom: 16px;
			overflow: hidden;
		}
		.more {
			color: $c-text-more;
		}
	}
	.sl-title .ivu-tabs-tab-active {
		font-size: $fz-lg;
	}
</style>