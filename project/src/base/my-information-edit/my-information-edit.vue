<template>
	<div class="dynamic-write comWidth">
		<Row>
			<Col span="14">
				<Form :model="write" :label-width="80" enctype="multipart/form-data">
					<FormItem label="标题：" prop="title">
						<Input v-model="write.title" placeholder="标题"></Input>
					</FormItem>
					<FormItem label="日期：">
						<DatePicker type="date" v-model="write.date" placeholder="日期"></DatePicker>
					</FormItem>
					<FormItem label="科室：">
						<CheckboxGroup v-model="write.department">
							<Checkbox label="社会事务科"></Checkbox>
							<Checkbox label="党政办"></Checkbox>
							<Checkbox label="经发科"></Checkbox>
							<Checkbox label="社区服务中心"></Checkbox>
						</CheckboxGroup>
					</FormItem>
					<FormItem label="上传图片：">
						<my-upload></my-upload>
					</FormItem>
					<FormItem label="内容：">
						<Input v-model="write.content" type="textarea" :autosize="{minRows: 5,maxRows: 15}" placeholder="内容">></Input>
					</FormItem>
					<FormItem>
		        <Button type="primary" @click="submit">确定</Button>
		        <Button type="ghost" @click="reset">重置</Button>
		      </FormItem>
				</Form>
			</Col>
			<Col span="10">
			</Col>
		</Row>
	</div>
</template>

<script>
	import myUpload from 'base/my-upload/my-upload'
	export default {
		components: {
			myUpload
		},
		data () {
			return {
				write: {
					title: '',
					date: '',
					department: [],
					content: ''
				}
			}
		},
		methods: {
			submit () {

			},
			reset () {

			}
		}
	}
</script>