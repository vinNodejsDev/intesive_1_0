<template>
  <div class="home">
    <ElButton type="danger" @click="onClick">Logout</ElButton>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: {
    ...mapActions('auth', ['logout']),
    async onClick() {
      await this.logout();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
