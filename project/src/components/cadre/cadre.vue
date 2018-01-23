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
				cadreData: [
					{
						id: 0,
						name: '文笔与口才',
						description: '',
						chartOption: {
							height: 500,
							option: {
								legend: {},
								xAxis: {
									type: 'value',
									min: 60
								},
								yAxis: {
									type: 'value',
									min: 60
								},
								series: [
									{
										type: 'scatter',
										data: [
											[98,89,'林一'],
											[78,29,'林二'],
											[92,80,'林三'],
											[88,92,'林四'],
											[68,76,'林五']
										],
										label: {
					            normal: {
					                show: true,
					                formatter (param) {
					                    return param.data[2];
					                },
					                position: 'top'
					            },
					            emphasis: {
				                show: true,
				                formatter: function (param) {
				                    return `${param.data[2]}:口才:${param.data[0]},:文笔:${param.data[1]}`;
				                },
				                position: 'top'
				            }
					        },
									}
								]
							}
						}
					}
				]
			}
		}
	}
</script>