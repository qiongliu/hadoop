<template>
  <div class="sign-up">
    <Form ref="signUp" :model="signUp" :rules="rule" label-position="right" :label-width="84">
      <FormItem label="用户名：" prop="username">
        <Input v-model="signUp.username" placeholder="请输入姓名"></Input>
      </FormItem>
      <FormItem label="真实姓名：" prop="realname">
        <Input v-model="signUp.realname" placeholder="请输入姓名"></Input>
      </FormItem>
      <FormItem label="密码：" prop="password">
        <Input type="password" v-model="signUp.password" placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem label="确认密码：" prop="repassword">
        <Input type="password" v-model="signUp.repassword" placeholder="请再次输入密码"></Input>
      </FormItem>
      <Row>
        <Col span="12">
          <FormItem label="性别：" prop="gender">
            <RadioGroup v-model="signUp.gender">
              <Radio label="男"></Radio>
              <Radio label="女"></Radio>
            </RadioGroup>
          </FormItem>
        </Col>
        <Col span="12" >
          <FormItem label="出生日期：" prop="birthDate">
            <DatePicker type="date" placeholder="请选择出生日期" v-model="signUp.birthDate"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <FormItem label="属于：" prop="belong">
        <Cascader v-model="signUp.belong" :render-format="formatBelong" :data="belongData" change-on-select filterable placeholder="请选择社区\村\企业"></Cascader>
      </FormItem>
      <FormItem>
        <Button class="sl-submit" type="primary" @click="submit">提交</Button>
        <Button class="sl-reset" type="ghost" @click="reset">重新填写</Button>
      </FormItem>
    </Form>      
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    created () {
      axios.get('/api/user/belong').then((result) => {
        let {code,belongList} = result.data
        let category = {
          children: []
        }
        let bdata = []
        // console.log(belongList)
        if (code === 0) {
          belongList.forEach((item) => {
            // console.log(item)

            if (category.value !== item.type._id ) {
              category.value = item.type._id
              category.label = item.type.name
              
              bdata.push(category)
              category.children = []
            }
            category.children.push({
              value: item._id,
              label: item.name
            })
          })
        }
        // console.log(bdata)
      })
    },
    data () {
      const repasswordCheck = (rule,val,cb) => {
        if (val !== this.signUp.password) {
          cb(new Error('两次输入的密码不一致！'))
        } else {
          cb()
        }
      }
      const usernameCheck = (rule,val,cb) => {
        axios.get(`/api/user/check?username=${val}`).then((result) => {
          if (result.data.code === 1) {
            cb(new Error('用户名已经被注册！'))
          } else {
            cb()
          }
        })
      }
      return {
        signUp: {
          username: '',
          realname: '',
          password: '',
          repassword: '',
          gender: '',
          birthDate: '',
          belong: [],
        },
        belongData: [
          {
            value: '0',
            label: '社区',
            children: [
              {
                value: '0',
                label: '青东社区'
              },
              {
                value: '1',
                label: '长乐西苑社区'
              }
            ]
          },
          {
            value: '1',
            label: '村',
            children: [
              {
                value: '2',
                label: '东扬善村'
              },
              {
                value: '3',
                label: '楼阁台村'
              }
            ]
          },
          {
            value: '2',
            label: '企业',
            children: [
              {
                value: '4',
                label: '汉港化工'
              },
              {
                value: '5',
                label: '巨坤花卉中心'
              }
            ]
          }
        ],
        rule: {
          username: [
            {required: true, message: '用户名不能为空！',trigger: 'blur' },
            {validator: usernameCheck, trigger: 'blur'}
          ],
          realname: [
            {required: true, message: '姓名不能为空！',trigger: 'blur' }
          ],
          password: [
            {required: true, message: '密码不能为空！',trigger: 'blur' },
            {min: 6, message: '密码长度要大于6位',trigger: 'blur'}
          ],
          repassword: [
            {required: true, message: '确认密码不能为空！',trigger: 'blur' },
            {validator: repasswordCheck, trigger: 'blur'}
          ],
          gender: [
            {required: true, message: '性别不能为空！',trigger: 'change' }
          ],
          birthDate: [
            {required: true, type: 'date', message: '出生日期不能为空！',trigger: 'change' }
          ],
          belong: [
            {required: true, type: 'array', message: '社区（村、企业）不能为空！',trigger: 'change' },
          ]
        }
      }
    },
    methods: {
      submit () {
        this.$refs.signUp.validate( (valid) => {
          if (valid) {
            console.log(this.signUp)
            return
            axios.post('/api/user/signUp',{
              signUpInfo: this.signUp
            }).then((userInfo) => {
              if (userInfo.data.code === 0) {
                userInfo.data.username = this.signUp.username
                this.$emit('confirmSignUp',userInfo.data)
              }
            })
          } else {
            // console.log('注册信息填写有误！')
          }
        })
      },
      reset () {
        this.$refs.signUp.resetFields();
      },
      formatBelong (labels,values) {
        return labels[labels.length-1]
      }
    }
  }
</script>

<style lang="scss">
  .sign-up {
    .sl-submit,.sl-reset{
      // width: 40%;
    }
  }
</style>