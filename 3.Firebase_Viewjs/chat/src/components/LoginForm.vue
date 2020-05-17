<template>
    <div class="login-form">
        <ElForm
            :model="formData"
            :rules="rules"
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
                <ElInput v-model="formData.password" type="password"/>
            </ElFormItem>
            <ElButton
                type="success"
                plain
                size="small"
                native-type="submit"
            >
                Log In
            </ElButton>
        </ElForm>
    </div>
</template>

<script>
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
};
</script>

<style scoped>

</style>
