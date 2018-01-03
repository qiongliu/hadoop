<template>
	<div class="subdistrict m-collapse">
		<div class="sl-target">
			<my-tab :titleInfo="titleInfo">
				<Collapse v-model="unfold" accordion>
					<Panel>
						社区服务中心
						<div solt="content">
							haha
						</div>
					</Panel>
					<Panel>2</Panel>
					<Panel>3</Panel>
					<Panel>4</Panel>
				</Collapse>
			</my-tab>
		</div>
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
				titleInfo: {
					name: '科室指标完成情况',
					description: '2018年度'
				},
				unfold: '0',

			}
		}
	}
</script>