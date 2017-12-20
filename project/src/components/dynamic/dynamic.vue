<template>
	<div class="sl-dynamic">
		<my-tab :titleInfo="titleInfo">
			<Timeline>
        <TimelineItem v-for="item in info" :key="item.id" :color="item.grade.color">
            <p class="time">{{item.title}}</p>
            <p class="content">{{item.content}}</p>
        </TimelineItem>
        <TimelineItem><a href="#">查看更多</a></TimelineItem>
	    </Timeline>
		</my-tab>
	</div>
</template>

<script>
	import myTab from 'base/my-tab/my-tab'

	export default {
		components: {
			myTab
		},
		data () {
			return {
				info: [
					{
						id: 0,
						grade: {
							num: 0,
							color: 'red'
						},
						title: '未央区发改委联合汉城街办举行“节能低碳暨电力安全生产宣传活动”',
						content: '为进一步提高全民安全用电意识，普及安全用电常识，传播节能理念，宣传散煤整治的重要意义，在6月16日开展“2017年节能宣传周和低碳日活动”和“2017年电力安全生产宣传咨询活动”的基础上...'
					},
					{
						id: 1,
						grade: {
							num: 1,
							color: 'green'
						},
						title: '未央区发改委联合汉城街办举行“节能低碳暨电力安全生产宣传活动”',
						content: '为进一步提高全民安全用电意识，普及安全用电常识，传播节能理念，宣传散煤整治的重要意义，在6月16日开展“2017年节能宣传周和低碳日活动”和“2017年电力安全生产宣传咨询活动”的基础上...'
					},
					{
						id: 2,
						grade: {
							num: 1,
							color: 'green'
						},
						title: '未央区发改委联合汉城街办举行“节能低碳暨电力安全生产宣传活动”',
						content: '为进一步提高全民安全用电意识，普及安全用电常识，传播节能理念，宣传散煤整治的重要意义，在6月16日开展“2017年节能宣传周和低碳日活动”和“2017年电力安全生产宣传咨询活动”的基础上...'
					},
					{
						id: 3,
						grade: {
							num: 2,
							color: 'blue'
						},
						title: '未央区发改委联合汉城街办举行“节能低碳暨电力安全生产宣传活动”',
						content: '为进一步提高全民安全用电意识，普及安全用电常识，传播节能理念，宣传散煤整治的重要意义，在6月16日开展“2017年节能宣传周和低碳日活动”和“2017年电力安全生产宣传咨询活动”的基础上...'
					},
					{
						id: 4,
						grade: {
							num: 2,
							color: 'blue'
						},
						title: '未央区发改委联合汉城街办举行“节能低碳暨电力安全生产宣传活动”',
						content: '为进一步提高全民安全用电意识，普及安全用电常识，传播节能理念，宣传散煤整治的重要意义，在6月16日开展“2017年节能宣传周和低碳日活动”和“2017年电力安全生产宣传咨询活动”的基础上...'
					},
					{
						id: 5,
						grade: {
							num: 2,
							color: 'blue'
						},
						title: '未央区发改委联合汉城街办举行“节能低碳暨电力安全生产宣传活动”',
						content: '为进一步提高全民安全用电意识，普及安全用电常识，传播节能理念，宣传散煤整治的重要意义，在6月16日开展“2017年节能宣传周和低碳日活动”和“2017年电力安全生产宣传咨询活动”的基础上...'
					},
					{
						id: 6,
						grade: {
							num: 2,
							color: 'blue'
						},
						title: '未央区发改委联合汉城街办举行“节能低碳暨电力安全生产宣传活动”',
						content: '为进一步提高全民安全用电意识，普及安全用电常识，传播节能理念，宣传散煤整治的重要意义，在6月16日开展“2017年节能宣传周和低碳日活动”和“2017年电力安全生产宣传咨询活动”的基础上...'
					}
				],
				titleInfo: {
					name: '本周动态',
					description: '共24条'
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/variable.scss';
	.sl-dynamic {
		.ivu-timeline-item {
			padding: 0
		}
		.time {
			font-size: $fz-md;
			font-weight: 600;
		}
	}
</style>