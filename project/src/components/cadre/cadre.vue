<template>
	<div class="cadre">
		<my-tab :titleInfo="titleInfo">
			<Collapse v-model="unfold" accordion>
				<Panel :name="'panle'+ item.id" v-for="(item,index) in cadreData" :key="index">{{item.name}}{{item.description}}
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
			myEcharts,
			myTab
		},
		data () {
			return {
				titleInfo: {
					name: '干部考核',
					description: '共12项考核'
				},
				unfold: 'panle0',
				// echartData: [],
				cadreData: [
					{
						id: 0,
						name: '文笔与口才',
						description: '',
						chartOption: {
							height: 500,
							option: {
								legend: {},
								grid: {
									left: 'left',
									containLabel: true,
									width: '88%'
								},
								tooltip: {
									trigger: 'item',
									axisPointer: {
										type: 'cross'
									},
									formatter: ((param) => {
										if (param.componentType === 'series') {
											return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' + param.value[2] + '</div><span>文笔</span>：' + param.value[0] + '<br/><span>口才</span>：' + param.value[1]  
										}
									}) 
								},
								xAxis: {
									type: 'value',
									min: 60,
									name: '文笔',
									splitLine: {
					          show: false
					        },
								},
								yAxis: {
									type: 'value',
									min: 60,
									name: '口才',
									splitLine: {
				            show: false
				        	},
								},
						    visualMap: [
							    {
							    	type: 'piecewise',
						        min: 60,
						        max: 100,
						        splitNumber: 4,
						        dimension: 0,
						        left: 'left',
						        top: 0,
						        showLabel: true,
						        text: ['文笔：'], 
						        textStyle: {
					            color: '#2d8cf0',
					            fontSize: 12,
						        },
						        inRange: {
					            color: ['#6e7d88','#91bdc2','#cda495','#d94e5d']
						        },
						        orient: 'horizontal'
							    },
							    {
							    	type: 'piecewise',
						        min: 60,
						        max: 100,
						        splitNumber: 4,
						        dimension: 1,
						        left: 500,
						        top: 0,
						        showLabel: true,
						        text: ['口才：'], 
						        calculable: true,
						        textStyle: {
					            color: '#2d8cf0',
					            fontSize: 12,
						        },
						        inRange: {
					            color: ['#6e7d88','#91bdc2','#cda495','#d94e5d']
						        },
						        orient: 'horizontal'
							    }
						    ],
								series: [
									{
										type: 'scatter',
										symbolSize: 6,
										data: this.getEchartData(),
										label: {
					            normal: {
				                show: true,
				                formatter (param) {
				                   return param.data[2];
				                },
				                position: 'bottom'
					            }
					        	},
						        markLine: {
						        	silent: true,
						        	lineStyle: {
							        	normal: {
							        		color: '#000'
							        	},
						        	},
						        	label: {
						        		normal: {
							        		formatter: '{b}:{c}'
						        		}
						        	},
					            data: [
					            	{
					                xAxis: this.computerXAxis(),
					                name: '文笔平均分',
				            		}, 
				            		{
					                yAxis: this.computerYAxis(),
					                name: '口才平均分',
				            		}
			            		]
						        },
						        markArea: {
						        	silent: true,
						        	data: [
						        		[
						        			{
						        				name: '口才较好',
						        				itemStyle: {
                        			normal: {
                           		color: 'transparent',
                        			}
                   					 },
                   					 label: {
			                        normal: {
			                          position: 'insideBottomRight',
			                          color: "#000",
			                          fontSize: 20,
			                        }
			                   		},
						        				coord: [0, Number.MAX_VALUE],
						        			},
						        			{
						        				coord: [this.aveXAxis,this.aveYAxis]
						        			}
						        		],
						        		[
						        			{
						        				name: '优秀',
						        				itemStyle: {
                        			normal: {
                           		color: 'transparent',
                        			}
                   					 },
                   					 label: {
			                        normal: {
			                          position: 'insideBottomLeft',
			                          color: "#000",
			                          fontSize: 20,
			                        }
			                   		},
						        				coord: [this.aveXAxis,this.aveYAxis]
						        			},
						        			{
						        				coord: [Number.MAX_VALUE, Number.MAX_VALUE],
						        			}
						        		],
						        		[
						        			{
						        				name: '文笔较好',
						        				itemStyle: {
                        			normal: {
	                           		color: 'transparent',
                        			}
                   					 },
                   					 label: {
			                        normal: {
			                          position: 'insideTopLeft',
			                          color: "#000",
			                          fontSize: 20,
			                        }
			                   		},
						        				coord: [this.aveXAxis,this.aveYAxis]
						        			},
						        			{
						        				coord: [Number.MAX_VALUE, 0],
						        			}
						        		],
						        		[
						        			{
						        				name: '要努力了',
						        				itemStyle: {
                        			normal: {
                           		color: 'transparent',
                        			}
                   					 },
                   					 label: {
			                        normal: {
			                          position: 'insideTopRight',
			                          color: "#000",
			                          fontSize: 20,
			                        }
			                   		},
						        				coord: [this.aveXAxis,this.aveYAxis]
						        			},
						        			{
						        				coord: [0, 0],
						        			}
						        		]
						        	]
						        }
									}
								]
							}
						}
					}
				]
			}
		},
		methods: {
			getEchartData () {
				this.echartData = []
				for (let i = 0; i < 100; i++) {
					let arr = [this.getRandom(),this.getRandom(),`林${i}`]
					this.echartData.push(arr)
				}
				return this.echartData
			},
			getRandom () {
				return parseInt(Math.random() * (100 - 60 + 1) + 60)
			},
			computerXAxis () {
				let sum = 0
				let len = this.echartData.length
				this.aveXAxis = 0
				this.echartData.forEach((item) => {
					sum += item[0]
				})
				return this.aveXAxis = sum / len
			},
			computerYAxis () {
				let sum = 0
				let len = this.echartData.length
				this.aveYAxis = 0
				this.echartData.forEach((item) => {
					sum += item[1]
				})
				return this.aveYAxis = sum / len
			}
		}
	}
</script>