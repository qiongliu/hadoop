<template>
	<div class="sl-login-wrap">
		<div class="login">
			<Form ref="login" v-show="showLogin" :model="login">
				<Poptip v-model='popUsername' placement="top-start">
					<div slot="content">用户名不能为空！</div>
					<FormItem>
						<Input class="text" v-model="login.username" type="text" placeholder="用户名/邮箱"></Input>
					</FormItem>
				</Poptip>
				<Poptip v-model='popPassword' placement="top-start">
					<div slot="content">密码不能为空！</div>
					<FormItem>
						<Input class="text" v-model="login.password" type="password" placeholder="密码"></Input>
					</FormItem>
				</Poptip>
				<FormItem class="auto-login">
					<Row>
						<Col span="10">
							<CheckboxGroup v-model="login.autoLogin">
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
							<Button class="sign-in" type="primary" @click="signIn">登录</Button>
						</Col>
						<Col span="12">
							<Button class="sign-up" type="primary" @click="signUp">注册</Button>
						</Col>						
					</Row>
				</FormItem>
			</Form>
			<div class="sl-login-info" v-show="!showLogin">
				<h2>欢迎，您真是个工作狂！</h2>
				<Row>
					<Col span="12">
					 <Badge count="1">
						<Avatar shape="square" icon="person" size="large" />
	       	 </Badge>
					</Col>
					<Col span="12">
		        <p><span>{{this.login.username}}</span>查看信息</p>
					</Col>
				</Row>
			</div>
		</div>
		<Modal
      v-model="showModal"
      :mask-closable="false">
      <p slot="header">用户注册</p>
      <sign-up @clickSignUp="clickSignUp"></sign-up>
      <div slot="footer"></div>
    </Modal>
	</div>
</template>

<script>
	import axios from 'axios'
	import signUp from 'components/sign-up/sign-up'

	export default {
		components: {
			signUp
		},
		data () {
			return {
				login: {
					username: '',
					password: '',
					autoLogin: []				
				},
				showModal: false,
				showLogin: true,
				popUsername: false,
				popPassword: false
			}
		},
		methods: {
			signIn () {
				if (this.login.username === '') {
					return this.popUsername = true
				}
				if (this.login.password === '') {
					return this.popPassword = true
				}
				
				axios.post('/api/user/signIn',{
					signInInfo: this.login
				}).then((result) => {
					if (result.data.code === 0) {
						this.showLogin = false
					} else {
						console.log('err')
					}
				})
			},
			signUp () {
				this.showModal = !this.showModal
			},
			clickSignUp (signUpInfo) {
				this.showModal = false
				this.showLogin = false
				console.log(signUpInfo)
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/variable.scss';
	.sl-login-wrap {
		width: 1000px;
 		height: 230px;
 		position: absolute;
 		top: 0;
 		left: 0;
 		right: 0;
 		margin: 0 auto;
		.login {
			position: absolute;
			padding: 24px 30px; 
			right: 0;
			width: 330px;
			height: 230px;
			background-color: #fff;
		}
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
		.auto-login {
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
		.ivu-form-item {
			margin-bottom: 10px;
		}
	}
	.ivu-poptip-inner {
		background-color: #ed3f14;
		color: #fff;
	}
	.ivu-poptip-arrow:after {
		border-top-color: #ed3f14 !important; 
	}
	.sl-login-info {
		h2 {
			margin-bottom: 16px;
		}
	}
</style>