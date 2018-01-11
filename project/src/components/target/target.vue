<template>
	<div class="sl-target m-collapse">
		<my-tab :titleInfo="titleInfo">
			<Collapse v-model="unfold" accordion>
				<Panel :name="'panle'+ item.id" v-for="(item,index) in targetData" :key="index">
					{{item.departmentName}}{{item.description}}
					<div slot="content">
						<my-echarts :chartOption="item.chartOption"></my-echarts>
					</div>
				</Panel>
			</Collapse>
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
		created () {
			this.targetData = [
				{
					id: 0,
					departmentName: '社区服务中心',
					description: '',
					chartOption: {
						width: 920,
						height: 360,
						option: {
							tooltip: {
					      trigger: 'axis',
					      axisPointer: {
					        type: 'cross',
					        crossStyle: {
					          color: '#999'
					        }
					      },
					      alwaysShowContent: 'true',
					      formatter (params) {
					      	let dataStr = ''
					      	params.forEach((item) => {
					      		dataStr += `<tr><td><span class="icon-formatter" style="background-color: ${item.color}"></span>${item.seriesName}</td>
					      		 <td>${item.value}</td>
					      		 <td>${item.value/80}%</td></tr>
					      		`
					      	})
					      	let str = `<h2>${params[0].name}</h2><table class="sl-target-formatter">
					      		<tr>
					      			<th>指标名称</th>
					      			<th>完成</th>
					      			<th>占全年任务</th>
					      		</tr>
					      		${dataStr}
					      		</table>`
					      	return str
					      }
					    },
					    toolbox: {
				        feature: {
			            dataView: {show: true, readOnly: false},
			            magicType: {show: true, type: ['line', 'bar']},
			            restore: {show: true},
			            saveAsImage: {show: true}
				        },
				        right: 40
					    },
					    legend: {
					      data:['新增就业','劳动力转移','进城落户','小额担保贷款']
					    },
					    xAxis: [
				        {
			            type: 'category',
			            data: ['1月','2月','3月','4月','5月','6月','7月','8月'],
			            axisPointer: {
		                type: 'shadow'
			            }
				        }
					    ],
					    yAxis: [
				        {
			            type: 'value',
			            min: 0,
			            max: 'dataMax',
			            axisLabel: {
			              formatter: '{value} 人'
			            }
				        },
				        {
			            type: 'value',
			            min: 0,
			            max: 'dataMax',
			            axisLabel: {
			              formatter: '{value} 万元'
			            }
				        }
					    ],
					    series: [
				        {
			            name:'新增就业',
			            type:'bar',
			            data:[242,195,432,32,14,271,43,53]
				        },
				        {
			            name:'劳动力转移',
			            type:'bar',
			            data:[4000,2143,423,754,924,54,657,335]
				        },
				        {
			            name:'进城落户',
			            type:'bar',
			            data:[837,453,234,53,235,765,53,234,56,887,64,321]
				        },
				        {
			            name:'小额担保贷款',
			            type:'line',
			            yAxisIndex: 1,
			            data:[43,145,678,241,125,136,43,564]
				        }
					    ]
						}
					}
				},
				{
					id: 1,
					departmentName: '经济发展科',
					description: '',
					chartOption: {
						width: 900,
						height: 300,
						option: {
							tooltip: {
					      trigger: 'axis',
					      axisPointer: {
					        type: 'cross',
					        crossStyle: {
					          color: '#999'
					        }
					      },
		            alwaysShowContent: 'true'
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
					        data:['新增就业','劳动力转移','进城落户','小额担保贷款']
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
					            min: 0,
					            max: 'dataMax',
					            axisLabel: {
					                formatter: '{value} 人'
					            }
					        },
					        {
					            type: 'value',
					            min: 0,
					            max: 'dataMax',
					            axisLabel: {
					                formatter: '{value} 万元'
					            }
					        }
					    ],
					    series: [
					        {
					            name:'新增就业',
					            type:'bar',
					            data:[242,195,432,32,14,271,43,53,22,57,534,63]
					        },
					        {
					            name:'劳动力转移',
					            type:'bar',
					            data:[4000,2143,423,754,924,54,657,335,676,443,215,546]
					        },
					        {
					            name:'进城落户',
					            type:'bar',
					            data:[837,453,234,53,235,765,53,234,56,887,64,321]
					        },
					        {
					            name:'小额担保贷款',
					            type:'line',
					            yAxisIndex: 1,
					            data:[43,145,678,241,125,136,43,564,633,267,454,645]
					        }
					    ]
						}
					}
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

<style lang="scss">
	.sl-target-formatter {
		th {
			padding: 0 10px;
			text-align: center;
		}
		td {
			text-align: left;
			padding: 0 10px;
		}
	}
	.icon-formatter {
		display: inline-block;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		margin-right: 10px;
	}
</style>