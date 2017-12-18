<template>
	<div class="news">
		<h2>新闻</h2>
		<ul class="content">
			<li v-for="(item,index) in news">
				<router-link 
				:to="{path: 'hehe', query:{newsId: item.id}}">
				{{item.title}}
				</router-link>	
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	// import newsDetail from 'components/newsDetail/newsDetail'
	export default {
		data () {
			return {
				news: [
				 {
				 	id: '0',
				 	title: '1开展2017年底农民工工资支付摸查工作',
				 	time: '2017-12-10',
				 	departments: '劳动保障所'
				 },
				 {
				 	id: '1',
				 	title: '2开展2017年底农民工工资支付摸查工作',
				 	time: '2017-12-10',
				 	departments: '劳动保障所'
				 },
				 {
				 	id: '2',
				 	title: '3开展2017年底农民工工资支付摸查工作',
				 	time: '2017-12-10',
				 	departments: '劳动保障所'
				 },
				 {
				 	id: '3',
				 	title: '4开展2017年底农民工工资支付摸查工作',
				 	time: '2017-12-10',
				 	departments: '劳动保障所'
				 }
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	p {
		color: #000;
	}
</style>