<template>
	<div class="tab-card">
		<Tabs class="sl-title" value="activeTab">
      <TabPane :label="label" name="activeTab" v-for="(item,index) in titleInfo" :key="index">
				<slot></slot>
      </TabPane>
	  </Tabs>
	</div>
</template>

<script>
	export default {
		props: {
			titleInfo: {
				type: Array,
				default: [{
					name: '默认标题',
					infoNum: 100
				}]
			}
		},
		data () {
			let self = this
			return {
				label (h) {
					return h('div',[
						h('span',self.titleInfo[0].name),
						h('Tag',{
							class: 'sl-title-tips'
						},`${self.titleInfo[0].infoNum}`)
					])
				}
			}
		}
	}
</script>