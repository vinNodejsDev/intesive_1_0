<template>
    <div class="sign_up-form">
        <h1>Sign Up</h1>
        <p class="sign_up-description">
            If you don't have an account yet, go through simple registration process.
        </p>
        <ElForm
            :v-model="formData"
            :rules="rules"
            @submit.native.prevent="onSubmit"
            ref="signUpForm"
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
            <ElFormItem
                label="Confirm"
                prop="checkPassword"
                size="small"
            >
                <ElInput
                    v-model="formData.checkPassword"
                    type="password"
                    :show-password="true"
                />
            </ElFormItem>

            <div class="form-action">
                <ElButton
                    type="success"
                    plain
                    size="small"
                    native-type="submit"
                    :loading="signUpInProgress"
                >
                    Sign Up
                </ElButton>
            </div>

        </ElForm>

        <div class="sign_up_footer">Already have an account?
            <div class="sign_up-footer-link">
                <router-link :to="{ name: 'Login' }">
                    <ElLink type="primary" :underline="false">Log In</ElLink>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SignUpForm',
  data() {
    const confirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.formData.password) {
        callback(new Error('Attention! The entered passwords do not match!'));
      } else {
        callback();
      }
    };
    return {
      formData: {
        email: '',
        password: '',
        checkPassword: '',
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'Please input password',
            trigger: 'blur',
          },
        ],
        checkPassword: [
          {
            required: true,
            validator: confirmPassword,
            trigger: 'blur',
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters('auth', ['signUpInProgress', 'isFirstLogin']),
  },
  watch: {
    isFirstLogin: 'redirectToFirstLoginSetup',
  },
  methods: {
    ...mapActions('auth', ['signUp']),
    onSubmit() {
      this.$refs.signUpForm.validate((isValid) => {
        if (!isValid) return;
        this.signUp({ ...this.formData });
      });
    },
    redirectToFirstLoginSetup(val) {
      if (val) {
        this.$router.push({ name: 'FirstLoginSettings' });
      }
    },
  },
};
</script>

<style scoped>
.sign_up-form {
    padding: 20px 80px;
    width: 350px;
}

.form-action {
    padding-top: 10px;
    padding-bottom: 30px;
}

.sign_up-footer,
.sign_up-description {
    display: flex;
    color: rgba(0, 0, 0, .5);
    font-size: 14px;
}

.sign_up-footer-link {
    margin-left: 10px;
}
</style>
