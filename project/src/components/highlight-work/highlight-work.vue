<template>
	<div class="highlight-work m-collapse">
		<my-tab :titleInfo="titleInfo">
				<Collapse v-model="highlight" accordion @on-change="clickCollapse">
		        <Panel :name="'panel' + index" v-for="(item,index) in info" :key="item.id">
	            {{item.headline}}
	            <p slot="content">
								<Row :gutter="10">
									<Col span="13" class='highlight-work-content'>
				            {{item.content}}
									</Col>
									<Col span="11">
										<my-pie :chartOption="item.chartOption" :chartEle="'main' + index"></my-pie>
									</Col>
								</Row>
		          </p>
		        </Panel>
		    </Collapse>
		</my-tab>
	</div>
</template>

<script>
	import myTab from 'base/my-tab/my-tab'
	import myPie from 'base/my-echarts/my-pie'
	export default {
		components: {
			myTab,
			myPie
		},
		data () {
			return {
				highlight: 'panel0',
				info: [],
				titleInfo: {
					name: '年度亮点工作',
					description: '2018年度'
				}
			}
		},
		created () {
			this.info = [
				{
					id: 0,
					headline: '1、聚力项目建设，推动地区经济提质增速',
					content: '坚持“项目为王”的理念，重布局、促投资、抓落地，在“质”上提升、在“量”上增速、在“点”上突破，切实提高区域经济综合实力。坚持“项目为王”的理念，重布局、促投资、抓落地，在“质”上提升、在“量”上增速、在“点”上突破，切实提高区域经济综合实力。坚持“项目为王”的理念，重布局、促投资、抓落地，在“质”上提升、在“量”上增速、在“点”上突破，切实提高区域经济综合实力。坚持“项目为王”的理念，重布局、促投资、抓落地，在“质”上提升、在“量”上增速、在“点”上突破，切实提高区域经济综合实力。坚持“项目为王”的理念，重布局、促投资、抓落地，在“质”上提升、在“量”上增速、在“点”上突破，切实提高区域经济综合实力。坚持“项目为王”的理念，重布局、促投资、抓落地，在“质”上提升、在“量”上增速、在“点”上突破，切实提高区域经济综合实力。',
					chartOption: {
						width: 400,
						height: 320,
		        title: {
		          text: '完成进度',
		          subtext: '',
		          left: 120
		        },
		        tooltip: {
		          trigger: 'item',
		          formatter: "{b}:{c}({d}%)"
		        },
		        legend: {
		          right: 0,
		          orient: 'vertical',
		          data: ['一月份','二月份','三月份','四月份','五月份','六月份','七月份','八月份','九月份','未完成']
		        },
		        toolbox: {
				        show: true,
				        right: 50,
				        bottom: 20,
				        feature: {
			            saveAsImage: {}
				        }
				    },
		        series: [
		          {
		            type: 'pie',
		            radius: [0,'86%'],
		            center: ['40%','53%'],
		            selectedMode: 'single',
		            label: {
	                normal: {
	                  position: 'inner'
	                }
		            },
		            data: [
		              {value:335, name:'一月份'},
		              {value:310, name:'二月份'},
		              {value:234, name:'三月份'},
		              {value:235, name:'四月份'},
		              {value:380, name:'五月份'},
		              {value:234, name:'六月份'},
		              {value:115, name:'七月份'},
		              {value:70,  name:'八月份'},
		              {value:184, name:'九月份'},
		              {value:500, name:'未完成'}
		            ]
				      }
		        ]
					}
				},
				{
					id: 1,
					headline: '2、聚力项目建设，推动地区经济提质增速',
					content: '坚持“项目为王”的理念，重布局、促投资、抓落地，在“质”上提升、在“量”上增速、在“点”上突破，切实提高区域经济综合实力。坚持“项目为王”的理念，重布局、促投资、抓落地，在“质”上提升、在“量”上增速、在“点”上突破，切实提高区域经济综合实力。坚持“项目为王”的理念，重布局、促投资、抓落地，在“质”上提升、在“量”上增速、在“点”上突破，切实提高区域经济综合实力。坚持“项目为王”的理念，重布局、促投资、抓落地，在“质”上提升、在“量”上增速、在“点”上突破，切实提高区域经济综合实力。坚持“项目为王”的理念，重布局、促投资、抓落地，在“质”上提升、在“量”上增速、在“点”上突破，切实提高区域经济综合实力。坚持“项目为王”的理念，重布局、促投资、抓落地，在“质”上提升、在“量”上增速、在“点”上突破，切实提高区域经济综合实力。',
					chartOption: {
						width: 400,
						height: 320,
		        title: {
		          text: '完成进度',
		          subtext: '',
		          left: 120
		        },
		        tooltip: {
		          trigger: 'item',
		          formatter: "{b}:{c}({d}%)"
		        },
		        legend: {
		          left: 'right',
		          orient: 'vertical',
		          data: ['一月份','二月份','三月份','四月份','五月份','未完成']
		        },
				    toolbox: {
				        show: true,
				        right: '30',
				        bottom: '20',
				        feature: {
			            saveAsImage: {}
				        }
				    },
		        series: [
		          {
		            type: 'pie',
		            radius: [0,'86%'],
		            center: ['40%','53%'],
		            label: {
	                normal: {
	                  position: 'inner'
	                }
		            },
		            selectedMode: 'single',
		            data: [
		              {value:335, name:'一月份'},
		              {value:310, name:'二月份'},
		              {value:234, name:'三月份'},
		              {value:235, name:'四月份'},
		              {value:380, name:'五月份'},
		              {value:500, name:'未完成'}
		            ]
				      }
		        ]
					}
				}
			]
		},
		methods: {
			clickCollapse (key) {

			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/variable.scss';
	.m-collapse {
		.ivu-collapse-header {
			font-size: $fz-md;
		}
	}
	.highlight-work-content {
		font-size: $fz-sm;
	}
</style>