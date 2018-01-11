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
						backgroundColor: '#fff',
    title: {
        text: '科室信息报送统计'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['党政办','社区服务中心','经济发展科','市容科','社会事务科']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap: false,
            data : ['一月','二月','三月','四月','五月','六月','七月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'党政办',
            type:'line',
            stack: '总量',
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
            markPoint: {
                data: [
                    {type: 'max', name: '最多'},
                    {type: 'min', name: '最少'},
                ]
            },
            areaStyle: {normal: {}},
            data:[36, 32, 34, 26, 17, 42, 31]
        },
        {
            name:'社区服务中心',
            type:'line',
            stack: '总量',
            label: {
                emphasis: {
                    show: true, 
                    position: 'right',
                    color: '#fff',
                    padding: 4,
                    borderRadius: 6,
                    backgroundColor: "#000",
                    formatter () {
                        return '登报8条'
                    }
                }
            },
            areaStyle: {normal: {}},
            data:[16, 24, 22, 32, 16, 10, 28]
        },
        {
            name:'经济发展科',
            type:'line',
            stack: '总量',
            label: {
                emphasis: {
                    show: true, 
                    position: 'right',
                    color: '#fff',
                    padding: 4,
                    borderRadius: 6,
                    backgroundColor: "#000",
                    formatter () {
                        return ''
                    }
                }
            },
            areaStyle: {normal: {}},
            data:[12, 8, 32, 18, 10, 24, 13]
        },
        {
            name:'市容科',
            type:'line',
            stack: '总量',
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
            areaStyle: {normal: {}},
            data:[24, 36, 8, 34, 6, 15, 24]
        },
        {
            name:'社会事务科',
            type:'line',
            stack: '总量',
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
            areaStyle: {normal: {}},
            data:[8, 27, 12, 36, 32, 15, 22]
        }
    ]
}
				}
			}
		}
	}
</script>