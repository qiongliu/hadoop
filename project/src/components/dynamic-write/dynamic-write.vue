<template>
	<div class="dynamic-write comWidth">
		<h2>编写动态</h2>
		<Form :model="write" :label-width="100">
			<FormItem label="标题" prop="title">
				<Input v-model="write.title" placeholder="标题"></Input>
			</FormItem>
			<FormItem label="日期">
				<DatePicker type="date" v-model="write.date" placeholder="日期"></DatePicker>
			</FormItem>
			<FormItem label="科室">
				<CheckboxGroup v-model="write.department">
					<Checkbox label="社会事务科"></Checkbox>
					<Checkbox label="党政办"></Checkbox>
					<Checkbox label="经发科"></Checkbox>
					<Checkbox label="社区服务中心"></Checkbox>
				</CheckboxGroup>
			</FormItem>
			<FormItem label="内容">
				<Input v-model="write.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="内容">></Input>
			</FormItem>
			<FormItem>
        <Button type="primary" @click="submit">Submit</Button>
        <Button type="ghost" @click="reset">Reset</Button>
      </FormItem>
		</Form>
	</div>
</template>

<script>
	export default {
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