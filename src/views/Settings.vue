<template>
  <div class="content">
    <h1>Settings</h1>

    <!-- <HereMaps :ziekenhuizen="ziekenhuizen" :center="center" /> -->
  </div>
</template>

<script>
// import HereMaps from "../components/HereMaps";

export default {
  components: {
    // HereMaps
  },
  data() {
    return {
      ziekenhuizen: [],
      center: { lat: 53.21687, lng: 6.57394 }
    };
  }
};
</script>

<style lang="scss" scoped></style>
