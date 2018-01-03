<template>
	<div class="dynamic-write">
		<Row :gutter="16">
			<Col span="14">
				<Form ref="information" :model="information" :rules="rule" :label-width="80">
					<FormItem label="标题：" prop="title">
						<Input v-model="information.title" placeholder="标题"></Input>
					</FormItem>
					<FormItem label="日期：" prop="date">
						<DatePicker type="date" format="yyyy-MM-dd" v-model="information.date" placeholder="日期"></DatePicker>
					</FormItem>
					<FormItem label="科室：" prop="department">
						<CheckboxGroup v-model="information.department">
							<Checkbox v-for="(item,index) in departmentData" :key="index" :label="item._id">{{item.name}}</Checkbox>
						</CheckboxGroup>
					</FormItem>
					<FormItem label="上传图片：">
						<my-upload @getUploadSrc="getUploadSrc"></my-upload>
					</FormItem>
					<FormItem label="内容：" prop="content">
						<Input v-model="information.content" type="textarea" :autosize="{minRows: 5,maxRows: 15}" placeholder="内容">></Input>
					</FormItem>
					<FormItem>
		        <Button type="primary" @click="submit">保存</Button>
		        <Button type="ghost" @click="reset">重置</Button>
		      </FormItem>
				</Form>
			</Col>
			<Col span="10">
				<my-information-preview :information="information"></my-information-preview>
			</Col>
		</Row>
	</div>
</template>

<script>
	import axios from 'axios'
	import myUpload from 'base/my-upload/my-upload'
	import myInformationPreview from 'base/my-information-preview/my-information-preview'
	export default {
		components: {
			myUpload,
			myInformationPreview
		},
		created () {
			axios.get('/article/getDepartment').then((result) => {
				this.departmentData = result.data
			})
		},
		data () {
			return {
				information: {
					title: '',
					date: new Date(),
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
			getUploadSrc (flag,src) {
				this.information.uploadFile = []
				if (flag === 'add') {
					this.information.uploadFile.push(src)
				} else {
				}
			},
			submit () {
				this.$refs.information.validate((valid) => {
					if (valid) {
						axios.post('/article/addInformation',{
							information: this.information	
						}).then((result) => {
							// console.log(result)
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

