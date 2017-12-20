<template>
	<div class="tab-card">
		<Tabs class="sl-title" value="activeTab">
      <TabPane :label="label" name="activeTab">
				<slot></slot>
      </TabPane>
	  </Tabs>
	</div>
</template>

<script>
	export default {
		props: {
			titleInfo: {
				type: Object,
				default: {
					name: '默认标题',
					description: ''
				}
			}
		},
		data () {
			let self = this
			return {
				label (h) {
					return h('div',[
						h('span',self.titleInfo.name),
						h('Tag',{
							class: 'sl-title-tips'
						},self.titleInfo.description)
					])
				}
			}
		}
	}
</script>