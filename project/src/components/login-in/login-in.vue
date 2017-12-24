<template>
	<div class="login-wrap">
		<div class="login-in">
			<Form ref="login" :model="login" :rules="ruleValidate">
				<FormItem prop="username">
					<Input class="text" v-model="login.username" type="text" placeholder="用户名/邮箱"></Input>
				</FormItem>
				<FormItem prop="password">
					<Input class="text" v-model="login.password" type="password" placeholder="密码"></Input>
				</FormItem>
				<FormItem class="tenday">
					<Row>
						<Col span="10">
							<CheckboxGroup v-model="login.tenday">
								<Checkbox label="十天内免登录"></Checkbox>
							</CheckboxGroup>
						</Col>
						<Col class="help" span="14">
							<a href="javascript:;">忘记密码？ ｜</a>
							<a href="javascript:;">帮助中心</a>						
						</Col>
					</Row>
				</FormItem>
				<FormItem class="btn">
					<Row :gutter="16">
						<Col span="12">
							<Button class="sign-in" type="primary" @click="signIn('login')">立即登录</Button>
						</Col>
						<Col span="12">
							<Button class="sign-up" type="primary" @click="signUp">注册</Button>
						</Col>						
					</Row>
				</FormItem>
			</Form>
		</div>
		<sign-up :isShow='isShow'></sign-up>
	</div>
</template>

<script>
	import signUp from 'components/sign-up/sign-up';

	export default {
		components: {
			signUp
		},
		data () {
			return {
				login: {
					username: '',
					password: '',
					tenday: []				
				},
				ruleValidate: {
					username: [
						{
							required: true,
							message: '用户名不能为空！',
							trigger: 'blur'
						}
					],
					password: [
						{
							required: true,
							message: '密码不能为空！',
							trigger: 'blur'
						},
						{
							type: 'string',
							min: 6,
							message: '密码长度不能小于6位！',
							trigger: 'blur'
						}
					]
				},
				isShow: false
			}
		},
		methods: {
			signIn (name) {
				this.$refs[name].validate( (valid) => {
					this.$Message.config({
						top: 300,
						duration: 4
					})
					if (valid) {
						this.$Message.success('登录成功！')
					} else {
						this.$Message.error('登录失败！')
					}
				})
			},
			signUp () {
				this.isShow = true
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/variable.scss';
	.login-wrap {
		width: 1000px;
 		height: 400px;
 		position: absolute;
 		top: 0;
 		left: 0;
 		right: 0;
 		margin: 0 auto;
	}
	.login-in {
		position: absolute;
		padding: 10px 30px; 
		right: 0;
		width: 330px;
		height: 230px;
		background-color: #fff;
		.text {
			input {
				font-size: $fz-sm;
				width: 264px;
				height: 42px;
			}
		}
		.help {
			text-align: right;
			a {
				color: #555;
				font-size: $fz-xs;
			}
		}
		.tenday {
			margin-bottom: 6px;
			span {
				color: #555;
			}
		} 
		.btn button{
			width: 100%;
			height: 36px;
			font-size: $fz-md-x;
		}
	}
</style>