<template>
	<div class="sl-target m-collapse">
		<my-tab :titleInfo="titleInfo">
			<Collapse v-model="unfold" accordion>
				<Panel :name="'panle'+ item.id" v-for="(item,index) in targetData" :key="index">
					{{item.departmentName}}<Tag>{{item.description}}</Tag>
					<div slot="content">
						<my-bar-line :chartOption="item.chartOption"></my-bar-line>
					</div>
				</Panel>
			</Collapse>
		</my-tab>
	</div>
</template>

<script>
	import myTab from 'base/my-tab/my-tab'
	import myBarLine from 'base/my-echarts/my-bar-line'
	export default {
		components: {
			myTab,
			myBarLine
		},
		created () {
			this.targetData = [
				{
					id: 0,
					departmentName: '社区服务中心',
					description: '共有三项省考指标（新增就业人员、劳动转移就业人员、有条件城镇居民落户人员），一项市考指标（小额担保贷款）',
					chartOption: {
						tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross',
			            crossStyle: {
			                color: '#999'
			            }
			        }
			    },
			    toolbox: {
			        feature: {
			            dataView: {show: true, readOnly: false},
			            magicType: {show: true, type: ['line', 'bar']},
			            restore: {show: true},
			            saveAsImage: {show: true}
			        }
			    },
			    legend: {
			        data:['蒸发量','降水量','平均温度']
			    },
			    xAxis: [
			        {
			            type: 'category',
			            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
			            axisPointer: {
			                type: 'shadow'
			            }
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            name: '水量',
			            min: 0,
			            max: 250,
			            interval: 50,
			            axisLabel: {
			                formatter: '{value} ml'
			            }
			        },
			        {
			            type: 'value',
			            name: '温度',
			            min: 0,
			            max: 25,
			            interval: 5,
			            axisLabel: {
			                formatter: '{value} °C'
			            }
			        }
			    ],
			    series: [
			        {
			            name:'蒸发量',
			            type:'bar',
			            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			        },
			        {
			            name:'降水量',
			            type:'bar',
			            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			        },
			        {
			            name:'平均温度',
			            type:'line',
			            yAxisIndex: 1,
			            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
			        }
			    ]
								}
				},
				{
					id: 1,
					departmentName: '经济发展科',
					description: '共有三项省考指标（新增就业人员、劳动转移就业人员、有条件城镇居民落户人员），一项市考指标（小额担保贷款）',
					chartOption: {}
				}
			]
		},
		data () {
			return {
				titleInfo: {
					name: '科室指标完成情况',
					description: '2018年度'
				},
				unfold: 'panle0',
				targetData: []
			}
		}
	}
</script>