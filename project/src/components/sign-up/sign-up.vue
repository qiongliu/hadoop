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
          <FormItem label="出生日期：" prop="date">
            <DatePicker type="date" placeholder="请选择出生日期" v-model="signUp.date"></DatePicker>
          </FormItem>
        </Col>
      </Row>
     <!--  <FormItem label="属于：" prop="belong">
        <Cascader :data="signUp.belong" change-on-select filterable placeholder="请选择社区\村\企业"></Cascader>
      </FormItem> -->
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
    data () {
      const repasswordCheck = (rule,val,cb) => {
        if (val !== this.signUp.password) {
          cb(new Error('两次输入的密码不一致！'))
        } else {
          cb()
        }
      }
      const belongCheck = (rule,val,cb) => {
        console.log(val);
      }
      return {
        signUp: {
          username: '',
          realname: '',
          password: '',
          repassword: '',
          gender: '',
          date: ''
          // ,
          // belong: [
          //   {
          //     value: 'comunity',
          //     label: '社区',
          //     children: [
          //       {
          //         value: '0',
          //         label: '青东社区'
          //       },
          //       {
          //         value: '1',
          //         label: '长乐西苑社区'
          //       }
          //     ]
          //   },
          //   {
          //     value: 'village',
          //     label: '村',
          //     children: [
          //       {
          //         value: '0',
          //         label: '东扬善村'
          //       },
          //       {
          //         value: '1',
          //         label: '楼阁台村'
          //       }
          //     ]
          //   },
          //   {
          //     value: 'company',
          //     label: '企业',
          //     children: [
          //       {
          //         value: '0',
          //         label: '汉港化工'
          //       },
          //       {
          //         value: '1',
          //         label: '巨坤花卉中心'
          //       }
          //     ]
          //   }
          // ]
        },
        rule: {
          username: [
            {required: true, message: '用户名不能为空！',trigger: 'blur' }
          ],
          realname: [
            {required: true, message: '姓名不能为空！',trigger: 'blur' }
          ],
          password: [
            {required: true, message: '密码不能为空！',trigger: 'blur' }
          ],
          repassword: [
            {required: true, message: '确认密码不能为空！',trigger: 'blur' },
            {validator: repasswordCheck, trigger: 'blur'}
          ],
          gender: [
            {required: true, message: '性别不能为空！',trigger: 'change' }
          ],
          date: [
            {required: true, type: 'date', message: '出生日期不能为空！',trigger: 'change' }
          ]
          // ,
          // belong: [
          //   {required: false, message: '社区（村、企业）不能为空！',trigger: 'blur' },
          //   {validator: belongCheck, trigger: 'blur'}
          // ]
        }
      }
    },
    methods: {
      submit () {
        this.$refs.signUp.validate( (valid) => {
          if (valid) {
            axios.post('/api/signUp',{
              haha: 'haha'
            })
            .then((result) => {
              console.log(result);
            })
          } else {
            console.log('err')
          }
        })
      },
      reset () {
        this.$refs.signUp.resetFields();
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