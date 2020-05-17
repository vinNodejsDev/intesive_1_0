<template>
    <div></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Notifier',
  computed: {
    ...mapGetters(['lastMessage']),
  },
  watch: {
    lastMessage: 'showMessage',
    // lastMessage: {
    //     handler: 'showMessage',
    //     immediate: true,
    //     deep: true,
    // },
  },
  methods: {
    showMessage(value) {
      this.$message({ ...value });
    },
  },
};
</script>
