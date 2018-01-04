<template>
	<div class="index">
		<highlight-work></highlight-work>
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
</template>

<script>
	import Department from 'components/department/department'
	import Dynamic from 'components/dynamic/dynamic'
	import Community from 'components/community/community'
	import myCollapse from 'base/my-collapse/my-collapse'
	import myPie from 'base/my-echarts/my-pie'
	import HighlightWork from 'components/highlight-work/highlight-work'
	export default {
		components: {
			Department,
			Dynamic,
			Community,
			myCollapse,
			myPie,
			HighlightWork
		}
	}
</script>