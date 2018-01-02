<template>
	<div class="dynamic-write">
		<Row :gutter="16">
			<Col span="14">
				<Form ref="information" :model="write" :rules="rule" :label-width="80">
					<FormItem label="标题：" prop="title">
						<Input v-model="write.title" placeholder="标题"></Input>
					</FormItem>
					<FormItem label="日期：" prop="date">
						<DatePicker type="date" format="yyyy-MM-dd" @on-change="changeDate" placeholder="日期"></DatePicker>
					</FormItem>
					<FormItem label="科室：" prop="department">
						<CheckboxGroup v-model="write.department">
							<Checkbox v-for="(item,index) in departmentData" :key="index" :label="item.name">{{item.name}}</Checkbox>
						</CheckboxGroup>
					</FormItem>
					<FormItem label="上传图片：">
						<my-upload @getUploadSrc="getUploadSrc"></my-upload>
					</FormItem>
					<FormItem label="内容：" prop="content">
						<Input v-model="write.content" type="textarea" :autosize="{minRows: 5,maxRows: 15}" placeholder="内容">></Input>
					</FormItem>
					<FormItem>
		        <Button type="primary" @click="submit">保存</Button>
		        <Button type="ghost" @click="reset">重置</Button>
		      </FormItem>
				</Form>
			</Col>
			<Col span="10">
				<p class="sl-pre-tips">预览：</p>
				<div class="sl-prev-information">
					<p class="sl-title">{{write.title}}</p>
					<img :src="preImg" alt="" v-if="write.uploadFile.length">
					<pre>{{write.content}}</pre>
					<div class="clearfix">
						<span class="sl-date fl">{{preDate}}</span>
						<span class="sl-department fr">{{preDepartment}}</span>
					</div>
				</div>
			</Col>
		</Row>
	</div>
</template>

<script>
	import axios from 'axios'
	import myUpload from 'base/my-upload/my-upload'
	export default {
		components: {
			myUpload
		},
		computed: {
			preDate () {
				return this.write.date
			},
			preDepartment () {
				return this.write.department.join(" ")
			},
			preImg () {
				if (this.write.uploadFile.length) {
					return this.write.uploadFile[0]
				}
			}
		},
		created () {
			axios.get('/article/getDepartment').then((result) => {
				this.departmentData = result.data
			})
		},
		data () {
			return {
				write: {
					title: '',
					date: '',
					department: [],
					content: '',
					uploadFile: []
				},
				rule: {
					title: [
						{required: true, message: '标题不能为空', trigger: 'blur'}
					],
					department: [
						{required: true, type: 'array', message: '请选择科室', min: 1, trigger: 'change'}
					],
					content: [
						{required: false}
					]
				},
				departmentData: [],
			}
		},
		methods: {
			changeDate (date) {
				this.write.date = date 
			},
			getUploadSrc (flag,src) {
				this.write.uploadFile = []
				if (flag === 'add') {
					this.write.uploadFile.push(src)
				} else {
				}
			},
			submit () {
				this.$refs.information.validate((valid) => {
					if (valid) {
						axios.post('/article/addInformation',{
							information: this.write	
						}).then((result) => {
							console.log(result)
						})
					} else {
						
					}
				})
			},
			reset () {

			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../common/css/variable.scss';
	.sl-pre-tips {
		color: $c-main;
		font-size: $fz-md;
		font-weight: 600;
	}
	.sl-prev-information {
		min-height: 400px;
		background-color: $c-bg;
		padding: 10px;
		font-size: $fz-sm;
		pre {
			font-family: "Microsoft Yahei";
			white-space: pre-wrap;
		}
		img {
			width: 100%;
		}
		.sl-title {
			font-size: $fz-md;
		}
		.sl-title,.sl-date,.sl-department {
			font-weight: 600;
		}
	}
</style>