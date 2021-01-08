<template>
  <div class="content">
    <div>
      <h1>Home</h1>
    </div>

    <div>
      <Maps :ziekenhuizen="ziekenhuizen" :ambulances="ambulances" />
    </div>

    <!-- <HereMaps :ziekenhuizen="ziekenhuizen" :center="center" /> -->
  </div>
</template>

<script>
import Maps from "../components/Maps";
// import HereMaps from "../components/HereMaps";

export default {
  components: {
    Maps,
    // HereMaps
  },
  data() {
    return {
      ziekenhuizen: [],
      ambulances: [],
      center: { lat: 53.21687, lng: 6.57394 },
    };
  },
};
</script>

<style lang="scss" scoped></style>
