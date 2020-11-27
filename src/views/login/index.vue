<template>
  <!-- 全屏容器 -->
  <div class='container-login'>
    <!-- 卡片 -->
    <el-card class="my-card">
      <img src="../../assets/logo_index.png" alt="">
      <!-- 表单 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px;margin-right:8px"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <!-- :value="true" 选中复选框不能进行修改  必须同意 -->
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login()" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import auth from '@/utils/auth'
export default {
  name: 'app-login',
  data () {
    // 自定义校验手机号的函数
    const checkMobile = (rule, value, callback) => {
      // 进行校验 （1开头，第二位 3-9 数字，其余剩下9位数字）
      if (!/^1[3-9]\d{9}$/.test(value)) {
        // 校验失败
        callback(new Error('手机号格式错误'))
      } else {
        // 校验成功
        callback()
      }
    }
    return {
      // 表单对应的数据对象
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      // 表单对应的校验规则
      loginRules: {
        mobile: [
          // required 是否必填
          // message 错误提示
          // trigger 触发校验时机
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // 手机号格式校验没有提供  需要实现自定义校验
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          // len 输入内容必须是 6位  min max 指定字符串的范围
          { len: 6, message: '验证码6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 对整体表单进行校验
      this.$refs.loginForm.validate(async (valid) => {
        // valid 值 true 校验成功
        if (valid) {
          // TODO 进行登录
          // 调用登录接口
          // 请求方式 post
          // 请求地址 http://ttapi.research.itcast.cn/mp/v1_0/authorizations
          // 请求参数 请求体 {mobile,code}
          // 响应内容 用户相关信息
          // this.$http.post(
          //   'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
          //   this.loginForm
          // ).then(res => {
          //   // 响应报文对象（响应状态行，响应头，响应主体 res.data）
          //   // res.data = {message:'',data:'用户信息'} 比对
          //   // 本地存储用户信息 使用auth.js模块中的setUser函数
          //   auth.setUser(res.data.data) // 这才是用户信息{token,id,name,photo}
          //   // 粗暴跳转到首页即可
          //   this.$router.push('/')
          // }).catch(() => {
          //   // 提示  手机号或验证码错误
          //   this.$message.error('手机号或验证码错误')
          // })

          // 使用 try{}catch(){} 捕获异常 进行处理
          try {
            // 理想情况
            // 1. 发请求获取数据
            const res = await this.$http.post('authorizations', this.loginForm)
            // 2. 本地存储用户信息
            auth.setUser(res.data.data)
            // 3. 跳转到 首页
            this.$router.push('/')
          } catch (e) {
            // 异常情况
            // 1. 错误提示即可
            this.$message.error('手机号或验证码错误')
          }
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container-login{
  width: 100%;
  height: 100%;
  // 设置我的容器绝对定位  依赖窗口的高度和宽度
  position: absolute;
  top: 0;
  left: 0;
  background: url(../../assets/login_bg.jpg) no-repeat;
  // 让背景图等比例缩放 去铺满容器
  background-size: cover;
  .my-card{
    width: 400px;
    height: 350px;
    transform: translate(-50%,-60%);
    position: absolute;
    left: 50%;
    top: 50%;
    img{
      width: 200px;
      display: block;
      margin: 0 auto 20px
    }
  }
}
</style>
