<template>
  <div class="home">Home
    <ElButton type="danger" @click="onClick">Logout</ElButton>
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

<style scoped>
.home {
  height: 100vh;
  background-color: #dcb4f2;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
