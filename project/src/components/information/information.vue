<template>
	<div class="information">
		<h2></h2>
		<Tabs type="card" vlaue="">
      <TabPane label="本科室信息" name="">
      	<my-info-list></my-info-list>
      </TabPane>
      <TabPane label="编写信息" name="">
      	<my-info-edit></my-info-edit>
      </TabPane>
      <TabPane label="街道信息" name="">
      	<my-info-list></my-info-list>
      </TabPane>
      <TabPane label="各科室信息完成情况" name="">标签三的内容</TabPane>
    </Tabs>
	</div>
</template>

<script>
	import myInfoList from 'base/my-information-list/my-information-list'
	import myInfoEdit from 'base/my-information-edit/my-information-edit'
	export default {
		components: {
			myInfoList,
			myInfoEdit
		}
	}
</script>