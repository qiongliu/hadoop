<template>
	<div class="information-list">
		<Row :gutter="16">
			<Col span="14">
				<Tree :data="informationList" :load-data="loadData" @on-select-change="clickItem"></Tree>
			</Col>
			<Col span="10">
				<my-information-preview :information="information"></my-information-preview>
			</Col>
		</Row>
	</div>
</template>

<script>
	import {formatDate} from 'common/js/base'
	import myInformationPreview from 'base/my-information-preview/my-information-preview'
	export default {
		components: {
			myInformationPreview
		},
		data () {
			return {
				information: {
					title: '',
					date: new Date(),
					department: [],
					content: '',
					uploadFile: []
				},
				informationList: [
					{
						title: '2017年，4月12日-4月19日（第十二周）',
						expand: true,
						children: [
							{
								title: '未央区发改委联合汉城街办举行“节能低碳暨电力安全生产宣传活动节能低碳暨”',
								content: '为进一步提高全民安全用电意识，普及安全用电常识，传播节能理念，宣传散煤整治的重要意义，在6月16日开展“2017年节能宣传周和低碳日活动”和“2017年电力安全生产宣传咨询活动”的基础上',
								url: '/1'
							},
							{
								title: '未央区发改委联合汉城街办举行“节能低碳暨电力安全生产宣传活动节能低碳暨”'
							}
						]
					},
					{
						title: '2017年，4月12日-4月19日（第十二周）',
						expand: false,
						loading: false,
						children: []
					},
					{
						title: '2017年，4月12日-4月19日（第十二周）',
						expand: false,
						children: [
							{
								title: '动态1'
							},
							{
								title: '动态2'
							}
						]
					},
					{
						title: '2017年，4月12日-4月19日（第十二周）',
						expand: false,
						children: [
							{
								title: '动态1'
							},
							{
								title: '动态2'
							}
						]
					}
				]
			}
		},
		methods: {
			loadData (item,cb) {
				setTimeout(() => {
					const data = [
						{
							title: '动态1'
						},
						{
							title: '动态2'
						}
					]
					cb(data)
				},2000)
			},
			clickItem (m) {
				this.$router.push('/informationList/1')
				// console.log(m[0].url)
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/variable.scss';
	.information-list {
		.ivu-tree-title {
			font-size: $fz-sm;
			white-space: pre-wrap;
		}
	}
</style>