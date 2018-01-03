<template>
	<div class="my-bar-line">
		<div ref="barLine" id="barLine"></div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		props: {
			chartOption: {
				type: Object,
				default: {}
			}
		},
		mounted () {
			this.$nextTick(() => {
				this.draw()
			})
		},
		methods: {
			draw () {
				let chart = echarts.init(this.$refs.barLine)
				chart.setOption(this.chartOption)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-bar-line {
		#barLine {
			width: 100%;
			height: 300px;
		}		
	}
</style>