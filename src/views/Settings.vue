<template>
  <div class="content">
    <h1>Settings</h1>
    <p>{{ calculate(val1, val2) }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val1: 0,
      val2: 2
    };
  },
  methods: {
    calculate(val1, val2) {
      return val1 + val2;
    }
  }
};
</script>

<style lang="scss" scoped></style>
