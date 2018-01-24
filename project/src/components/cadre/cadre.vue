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
									left: 'left'
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
						        dimension: 0,
						        right: 0,
						        top: -50,
						        text: ['高', '文笔：低'], // 文本，默认为数值文本
						        calculable: true,
						        // itemWidth: 18,
						        // itemHeight: 160,
						        textStyle: {
					            color: '#3259B8',
					            height: 56,
					            fontSize: 11,
					            lineHeight: 60,
						        },
						        inRange: {
					            color: ['#000', '#6e7d88']
						        },
						        padding: [50, 20],
						        // orient: 'horizontal',
							    },
							    {
							    	type: 'piecewise',
						        min: 60,
						        max: 100,
						        dimension: 1,
						        right: 0,
						        top: 200,
						        text: ['高', '口才：低'], // 文本，默认为数值文本
						        calculable: true,
						        textStyle: {
					            color: '#3259B8',
					            height: 56,
					            fontSize: 11,
					            lineHeight: 60,
						        },
						        inRange: {
					            color: ['#000', '#6e7d88']
						        },
						        padding: [50, 20]
							    }
						    ],
								series: [
									{
										type: 'scatter',
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
			                          color: "#d4726f",
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
						        				name: '文笔、口才都很不错',
						        				itemStyle: {
                        			normal: {
                           		color: 'transparent',
                        			}
                   					 },
                   					 label: {
			                        normal: {
			                          position: 'insideBottomLeft',
			                          color: "#d4726f",
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
						        				name: '文笔不错',
						        				itemStyle: {
                        			normal: {
                           		color: 'transparent',
                        			}
                   					 },
                   					 label: {
			                        normal: {
			                          position: 'insideTopLeft',
			                          color: "#d4726f",
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
			                          color: "#d4726f",
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
				let random = parseInt(Math.random() * (100 - 60 + 1) + 60)
				let i = 0
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