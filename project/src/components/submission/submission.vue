<template>
	<div class="submission">
		<my-tab :titleInfo="titleInfo">
			<my-echarts :chartOption="chartOption"></my-echarts>
		</my-tab>
	</div>
</template>

<script>
	import myTab from 'base/my-tab/my-tab'
	import myEcharts from 'base/my-echarts/my-echarts'
  import {formatDate} from 'common/js/base'
	export default {	
		components: {
			myTab,
			myEcharts
		},
		data () {
			return {
				titleInfo: {
					name: '科室信息报送统计',
					description: '共报送信息300条，登报20条'
				},
				chartOption: {
          height: 500,
					option: {
            title: {
              show: false,
              text: '科室信息报送统计'
            },
            legend: {
              data:['党政办','社区服务中心','经济发展科','市容科']
            },
            toolbox: {
              right: 10,
              feature: {
                saveAsImage: {},
                dataView: {
                  readOnly: false
                },
                dataZoom: {},
                magicType: {type: ['line', 'bar']}
              }
            },
            grid: {
              left: 20,
              right: 70,
              bottom: 50,
              containLabel: true
            },
            xAxis: [
              {
                type : 'time',
                boundaryGap: false,
                axisPointer: {
                  show: true
                }
              }
            ],
            yAxis: [
              {
                type : 'value'
              }
            ],
            label: {
              emphasis: {
                show: true, 
                position: 'right',
                color: '#fff',
                padding: 4,
                borderRadius: 6,
                backgroundColor: "#000"
              }
            },
            dataZoom: {
              filterMode: 'filter',
              startValue: formatDate(new Date() - 60 * 60 * 24 * 4 * 1000),
              endValue: formatDate(new Date()),
              minValueSpan: 3600 * 24 * 1000 * 5
            },
            series: [
              {
                name:'党政办',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: this.getEchartData()
              },
              {
                name:'经济发展科',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: this.getEchartData()
              },
              {
                name:'社区服务中心',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: this.getEchartData()
              },
              {
                name:'市容科',
                type:'line',
                stack: '总量',
                markPoint: {
                  itemStyle: {
                    normal: {
                      color: '#000'
                    }
                  },
                  label: {
                    normal: {
                      color: '#fff',
                      formatter (param) {
                        return `${param.value}条`
                      }                          
                    },
                    emphasis: {
                      position: 'inside',
                      padding: 0
                    }
                  },
                  silent: false,
                  data: [
                    {
                      type: 'max'
                    },
                    {
                      type: 'min'
                    }
                  ]
                },
                areaStyle: {normal: {}},
                data: this.getEchartData()
              }
            ]
          }
				}
			}
		},
    methods: {
      getEchartData () {
        this.echartData = []
        let now = new Date().getTime()
        for (let i = 0; i < 100; i++) {
          let arr = [formatDate(now - 60 * 60 * 24 * i * 1000),this._getRandom()]
          this.echartData.push(arr)
        }
        return this.echartData
      },
      _getRandom () {
        return parseInt(Math.random() * (10 - 0 + 1) + 0)
      }
    }
	}
</script>