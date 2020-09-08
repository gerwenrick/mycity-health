<template>
  <div class="content">
    <div>
      <h1>Home (Hi)</h1>
    </div>

    <div>
      <Maps :ziekenhuizen="ziekenhuizen" />
    </div>
  </div>
</template>

<script>
import Maps from "../components/Maps";
export default {
  components: {
    Maps
  },
  data() {
    return {
      ziekenhuizen: []
    };
  }
};
</script>

<style lang="scss" scoped></style>
