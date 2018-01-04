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
            data:[120, 132, 101, 134, 90, 230, 210]
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
            data:[220, 182, 191, 234, 290, 330, 310]
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
            data:[150, 232, 201, 154, 190, 330, 410]
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
            data:[320, 332, 301, 334, 390, 330, 320]
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
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
}
				}
			}
		}
	}
</script>