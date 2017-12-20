<template>
  <div class="my-pie">
    <div :id="chartEle" :style="`width: ${chartOption.width}px; height: ${chartOption.height}px;`"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    props: {
      chartOption: {
        type: Object,
        default: {}
      },
      chartEle: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        chart: null
      }
    },
    mounted () {
      this.$nextTick(function() {
        this.drawPie()
      })
    },
    methods: {
      drawPie () {
        this.chart = echarts.init(document.getElementById(this.chartEle))
        this.chart.setOption(this.chartOption)
      }
    }
  }
</script>
