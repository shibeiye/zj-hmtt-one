<template>
  <div class="container-login">
      <el-card class="my-card">
          <img src="../../assets/logo_index.png" alt="">
          <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
              <el-form-item prop="mobile">
                  <el-input  v-model="loginForm.mobile" placeholder='请输入用户名'></el-input>
              </el-form-item>
              <el-form-item prop="code">
                  <el-input  v-model="loginForm.code" placeholder='请输入验证码' style="width:240px;margin-right:8px"></el-input>
                  <el-button>发送验证码</el-button>
              </el-form-item>
              <el-form-item>
                <el-checkbox :value="true">已同意</el-checkbox>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" style="width:100%;" @click="login()">登录</el-button>
              </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>
<script type="text/javascript">
import auth from '@/utils/auth'
export default {
  name: 'app-login',
  data () {
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        // 验证成功
        callback(new Error('手机号格式错误'))
      } else { // 验证失败
        callback()
      }
    }
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(valid => {
        console.log(valid)
        if (valid) {
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm).then(res => {
            auth.setUser(res.data.data)
            this.$router.push('/')
          }).catch(() => {
            this.$message.error('手机号或验证码错误')
          })
        }
      })
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less" >
.container-login{
    width:100%;
    height: 100%;
    position: absolute;
    left:0;
    top:0;
    background: url(../../assets/login_bg.jpg) no-repeat;
    background-size: cover;
    .my-card{
        width: 400px;
        height: 350px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-60%);
        img{
            width: 200px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
        }
    }
    }
</style>
