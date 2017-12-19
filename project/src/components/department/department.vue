<template>
	<div class="department">
		<my-tabs-card :info="info" :gridInfo="gridInfo"></my-tabs-card>
	</div>
</template>

<script>
	import myTabsCard from 'base/my-tabs-card/my-tabs-card'

	export default {
		components: {
			myTabsCard
		},
		data () {
			return {
				gridInfo: {
					gutter: 0,
					col: 6
				},
				info: [{
					name: '科室',
					list: [
						{
							id: 0,
							name: '党政办',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},
						{
							id: 1,
							name: '经济发展科',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},
						{
							id: 2,
							name: '劳动保障科',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},{
							id: 3,
							name: '财政所',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},
						{
							id: 4,
							name: '社会事务科',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},
						{
							id: 5,
							name: '计生科',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},
						{
							id: 6,
							name: '城建科',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},
						{
							id: 7,
							name: '农业遗址科',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},{
							id: 8,
							name: '市容科',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},
						{
							id: 9,
							name: '司法所',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},
						{
							id: 10,
							name: '食药所',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},
						{
							id: 11,
							name: '经济发展科',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},
						{
							id: 12,
							name: '劳动保障科',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},{
							id: 13,
							name: '财政所',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						},
						{
							id: 14,
							name: '社会事务科',
							intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
							leader: '科长：庞青云',
							num: "科室人数：10人"
						}
					],
					num: 14
				}]
			}
		},
		created () {
			
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/variable.scss';
	.sl-title {
		.ivu-tabs-tab-active {
			font-size: $fz-lg;
			padding: 8px 0;
		}
		.sl-title-tips {
			margin-left: 12px;
		}
	}
</style>