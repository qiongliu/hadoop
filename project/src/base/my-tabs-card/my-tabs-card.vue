<template>
	<div class="tabs-card">
		<Tabs class="sl-title" value="activeTab">
      <TabPane :label="item.name" :name="index === 0 ? 'activeTab' : ''" v-for="(item,index) in info" :key="index">
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
	import myTabs from 'base/my-tabs/my-tabs'

	export default {
		components: {
			myCard,
			myTabs
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
		data () {
			return {
				label () {

				}
			}
		}
	}
</script>