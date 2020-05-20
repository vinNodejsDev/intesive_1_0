<template>
    <div class="login-form">
        <h1 class="login-form-title">Live Chat</h1>
        <p class="login-form-description">
            Welcome to Live Chat! Please login to join.
        </p>
        <ElForm
            :model="formData"
            :rules="rules"
            @submit.native.prevent="onSubmit"
            ref="loginForm"
        >
            <ElFormItem
                label="Email"
                prop="email"
                size="small"
            >
                <ElInput v-model="formData.email"/>
            </ElFormItem>
            <ElFormItem
                label="Password"
                prop="password"
                size="small"
            >
                <ElInput
                    v-model="formData.password"
                    type="password"
                    :show-password="true"
                />
            </ElFormItem>

            <router-link :to="{name: 'ForgotPassword'}">
                <ElLink type="info">Forgot password? Reset password</ElLink>
            </router-link>
            <div class="form-action">
                <ElButton
                    type="success"
                    plain
                    size="small"
                    native-type="submit"
                    :loading="loginInProgress"
                >
                    Log In
                </ElButton>
            </div>
            <router-link :to="{name: 'SignUp '}">
                <ElLink type="primary">Don't have account yet? Sign Up! </ElLink>
            </router-link>
        </ElForm>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginForm',
  data: () => ({
    formData: {
      email: '',
      password: '',
    },
    rules: {
      email: [
        {
          required: true,
          message: 'Please enter correct email...',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please enter correct email...',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'Please enter password',
          trigger: 'blur',
        },
      ],
    },
  }),
  computed: {
    ...mapGetters('auth', ['loginInProgress', 'isLoggedIn']),
  },
  watch: {
    isLoggedIn: 'redirectToHome',
  },
  methods: {
    ...mapActions('auth', ['login']),
    onSubmit() {
      this.$refs.loginForm.validate((isValid) => {
        if (!isValid) return;
        this.login({ ...this.formData });
      });
    },
    redirectToHome(val) {
      if (val) {
        this.$router.push({ name: 'Home' });
      }
    },
  },
};
</script>

<style scoped>
.login-form {
    padding: 200px 80px;
    width: 350px  ;
}

.login-form-description {
    margin-bottom: 30px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
}

.form-action {
    margin-top: 10px;
    margin-bottom: 30px;
}
</style>
