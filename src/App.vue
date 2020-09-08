<template>
  <div id="app">
    <SiteNav v-if="showNav"></SiteNav>
    <UserRow v-if="showNav"></UserRow>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SiteNav from "@/components/SiteNav";
import UserRow from "@/components/UserRow";

export default {
  components: {
    SiteNav,
    UserRow
  },
  computed: {
    ...mapState(["userProfile"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    }
  }
};
</script>
