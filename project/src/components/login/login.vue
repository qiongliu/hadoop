<template>
	<div class="sl-login-wrap">
		<div class="login">
			<Form ref="login" v-if="!showLogin" :model="login">
				<my-tips :content="usernameTipsContent" :isShow="usernameTips">
					<FormItem>
						<Input class="text" ref="username" v-model="login.username" type="text" placeholder="用户名/邮箱"></Input>
					</FormItem>
				</my-tips>
				<my-tips content="密码不能为空！" :isShow="passwordTips">
					<FormItem>
						<Input class="text" ref="password" v-model="login.password" type="password" placeholder="密码"></Input>
					</FormItem>
				</my-tips>
				<FormItem class="auto-login">
					<Row>
						<Col span="10">
							<CheckboxGroup v-model="login.autoLogin">
								<Checkbox label="1">十天内免登录</Checkbox>
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
			<div class="sl-login-info" v-if="showLogin">
				<Poptip trigger="hover" class="sl-weather" placement="top">
					<p class="sl-weather-tips">{{weather.tips}}</p>
	        <div slot="title"><span>{{weather.type}}</span><span>aqi:{{weather.aqi}}</span></div>
	        <div slot="content">
	           <span>{{weather.high}}</span><span>{{weather.low}}</span>
	        </div>
		    </Poptip>
		     <!-- <span class="sl-realname">{{realname}},</span> -->
				<div class="clearfix">
					<Badge count="1" class="sl-badge fl">
						<Avatar shape="square" icon="person" size="large" />
	       	</Badge>
	       	<div class="fl">
	       	 	<p class="sl-letter">{{realname}},您有新信息，请及时<a href="javascript:;">查看</a></p>
		       	<div class="sl-userinfo">
			       	<a href="javascript:;" class="">完善个人资料</a><span class="">我的空间</span><span class="sl-sign-out" @click="signOut">退出</span>
		       	</div>
	       	</div>
       	</div>
       	<div class="sl-operation">
       		<span>我的操作：</span>
       		<div>
						<Tag color="blue"><span @click="viewInfromation">信息+</span></Tag>
						<Button icon="ios-plus-empty" type="dashed" size="small" @click="addConcern">修改操作列表</Button>
					</div>
       	</div>
				<div class="sl-concern">
					<span>我的关注：</span>
					<div>
						<Tag color="blue">本周动态</Tag>
						<Tag color="blue">科室指标</Tag>
						<Tag color="blue">青东社区</Tag>
						<Tag color="blue">庞马村</Tag>
						<Tag color="blue">业务办理</Tag>
						<Button icon="ios-plus-empty" type="dashed" size="small" @click="addConcern">修改关注列表</Button>
					</div>
				</div>
			</div>
		</div>
		<Modal
      v-model="showModal"
      :mask-closable="false">
      <p slot="header">用户注册</p>
      <sign-up @confirmSignUp="confirmSignUp"></sign-up>
      <div slot="footer"></div>
    </Modal>
	</div>
</template>

<script>
	import axios from 'axios'
	import signUp from 'components/sign-up/sign-up'
	import myTips from 'base/my-tips/my-tips'

	export default {
		components: {
			signUp,
			myTips
		},
		computed: {
			showLogin: {
				get () {
					return Boolean(this.$store.getters.role)
				}
			} 
		},
		created () {
			axios.get('http://wthrcdn.etouch.cn/weather_mini?city=西安').then((result) => {
				let forecast = result.data.data.forecast[0]
				this.weather = {
					tips: '今天天气还不错，努力工作吧！',
					aqi: result.data.data.aqi,
					high: forecast.high,
					low: forecast.low,
					type: forecast.type
				}
			})
			axios.get('/api/autoLogin').then((userInfo) => {
				if (!userInfo.data.code) {
	        this.$store.commit('role', userInfo.data.roleType)
					this.realname = userInfo.data.realname
					this.$router.push({name: "subdistrict"})					
				}
      })
		},
		data () {
			return {
				login: {
					username: '',
					password: '',
					autoLogin: []				
				},
				realname: '',
				weather: {},
				showModal: false,
				usernameTipsContent: '用户名不能为空！',
				usernameTips: false,
				passwordTips: false,
			}
		},
		methods: {
			signIn () {
				if (!this.login.username) {
					this.$refs.username.focus()
					this.usernameTips = !this.usernameTips
					return
				}
				if (!this.login.password) {
					this.$refs.password.focus()
					this.passwordTips = !this.passwordTips
					return
				}

				axios.post('/api/user/signIn',{
					signInInfo: this.login
				}).then((userInfo) => {
					if (userInfo.data.code === 0) {
						this._setState(userInfo.data.userInfo)
					} else {
						this.usernameTipsContent = userInfo.data.message
						this.usernameTips = !this.usernameTips
					}
				})
			},
			signUp () {
				this.showModal = !this.showModal
			},
			signOut () {
				axios.get('/api/user/signOut').then((result) => {
					if (result.data.code === 0) {
						this.$store.commit('role', 0)
						this.$router.push({path: '/'})
					}
				})
			},
			confirmSignUp (userInfo) {
				this.showModal = false
				this._setState(userInfo.data.userInfo)
			},
			viewInfromation () {
				this.$router.push('/information')
			},
			_setState (userInfo) {
				this.realname = userInfo.realname
				this.$store.commit('role',userInfo.role.type)
				this.$store.commit('belong',userInfo.belong)
			},
			addConcern () {

			},
			deleteConcern () {

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
	.sl-login-info {
		h2 {
			margin-bottom: 16px;
		}
	}
	.sl-weather {
		span {
			padding: 0 10px;
		}
	}
	.sl-weather-tips {
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 10px;
		color: $c-main;
		cursor: pointer;
	}
	.sl-badge {
		margin-right: 16px;
	}
	.sl-letter {
		font-size: $fz-sm;
	}
	.sl-userinfo {
		span {
			margin: 0 12px;
		}
	}
	.sl-sign-out {
		cursor: pointer;
	}
	.sl-concern {
		margin-top: 10px;
	}
	.ivu-badge-count {
		z-index: 9;
	}
</style>