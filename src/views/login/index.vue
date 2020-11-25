<template>
  <div class="container-login">
      <el-card class="my-card">
          <img src="../../assets/logo_index.png" alt="">
          <el-form :model="loginForm">
              <el-form-item>
                  <el-input  v-model="loginForm.mobile" placeholder='请输入用户名'></el-input>
              </el-form-item>
              <el-form-item>
                  <el-input  v-model="loginForm.code" placeholder='请输入验证码' style="width:240px;margin-right:8px"></el-input>
                  <el-button>发送验证码</el-button>
              </el-form-item>
              <el-form-item>
                <el-checkbox :value="true">已同意</el-checkbox>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" style="width:100%;">登录</el-button>
              </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'app-login',
  data () {
    return {
      loginForm: {
        mobile: '',
        code: ''
      }
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
