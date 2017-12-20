<template>
	<div class="tabs-card">
		<Tabs class="sl-title" value="activeTab">
      <TabPane :label="setLabel(item.name,item.num)" :name="index === 0 ? 'activeTab' : ''" v-for="(item,index) in info" :key="index">
      	<Row>
      		<Col :span="gridInfo.col" v-for="(subItem,subIndex) in item.list" :key="subIndex">
						<my-card :info="subItem"></my-card>
      		</Col>
      	</Row>
      </TabPane>
	  </Tabs>
	</div>
</template>

<script>
	import myCard from 'base/my-card/my-card'

	export default {
		components: {
			myCard
		},
		props: {
			info: {
				type: Array,
				default: []
			},
			gridInfo: {
				type: Object,
				default: {}
			}
		},
		methods: {
			setLabel (name,num) {
				let self = this
				return (h) => {
					return h('div',[
						h('span',name),
						h('Tag',{
							class: 'sl-title-tips'
						},num)					
					])
				}
			}
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