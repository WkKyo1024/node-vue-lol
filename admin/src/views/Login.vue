<template>
  <div class="login-container">
    <el-card class="login-card" shadow="hover">
      <div slot="header">
        <span style="margin: 0px 40%;font-size: 18px;">请先登录</span>
      </div>
      <!-- prevent阻止表单的默认提交 -->
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "admin",
        password: "123456",
      },
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("login", this.model);
      localStorage.token = res.data.token;
      this.$router.push("/");
      this.$message({
        type: "success",
        message: "登陆成功",
      });
    },
  },
};
</script>

<style scoped>
.login-card {
  width: 25rem;
  margin: 5rem auto;
}
</style>
