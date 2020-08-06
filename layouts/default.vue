<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("fetchData");
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
