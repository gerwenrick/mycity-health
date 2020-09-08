<template>
  <div class="content">
    <h1>Ziekenhuizen</h1>
    <v-container>
      <v-layout>
        <v-flex xs12 offset-sm1 offset-md2 class="zkh-list">
          <v-card
            class="mx-auto zkh-card"
            max-width="344"
            outlined
            v-for="ziekenhuis in ziekenhuizen"
            :key="ziekenhuis.id"
            :to="'/ziekenhuizen/' + ziekenhuis.id"
            @click="onLoadZiekenhuis(ziekenhuis.id)"
            style="cursor: pointer"
          >
            <v-container fluid>
              <v-layout row>
                <v-card-title primary-title>
                  <h5>{{ ziekenhuis.Naam }}</h5>
                  <!-- <div>Adresgegevens</div> -->
                </v-card-title>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      ziekenhuis: []
    };
  },
  // props: ["id", "name"],
  components: {},
  computed: {
    ...mapState(["userProfile", "ziekenhuizen"])
  },
  methods: {
    onLoadZiekenhuis(id) {
      this.$router.push("/ziekenhuizen/" + id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
