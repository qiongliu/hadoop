<template>
	<div class="my-echarts">
		<div ref="echarts" id="echarts" :style="style"></div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	// import 'echarts/map/js/xi1_an1'
	export default {
		props: {
			chartOption: {
				type: Object,
				default: {}
			}
		},
		data () {
			return {
				style: ''
			}
		},
		created () {
			this.setStyle()
		},
		mounted () {
			this.$nextTick(() => {
				this.draw()
			})
		},
		methods: {
			setStyle () {
				let width = this.chartOption.width ? this.chartOption.width + 'px' : '100%'
				let height = this.chartOption.height  ? this.chartOption.height + 'px' : '300px'
				this.style = `width: ${width}; height: ${height}`
			},
			draw () {
				let chart = echarts.init(this.$refs.echarts)
				chart.setOption(this.chartOption.option)
			}
		}
	}
</script>