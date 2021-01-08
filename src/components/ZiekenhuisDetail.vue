<template>
  <div class="content">
    <!-- <h1>Ziekenhuis Detail</h1>
    <h2></h2>-->
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-btn class="primary-button" color="primary" @click="$router.go(-1)">
            <v-icon small>mdi-chevron-left</v-icon>Terug
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <!-- <v-card-title>Ziekenhuis Naam</v-card-title> -->
            <v-card-title>
              <strong>{{ ziekenhuis.Naam }}</strong>
            </v-card-title>
          </v-card>
          <v-list rounded>
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Id: {{ ziekenhuis.id }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Capaciteit: {{ ziekenhuis.Capaciteit }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Specialiteiten:
                    <ul
                      v-for="(specialiteit, i) in ziekenhuis.Specialiteiten"
                      :key="i"
                      class="zkh-Chip"
                    >
                      <li>
                        <v-chip>{{ specialiteit }}</v-chip>
                      </li>
                    </ul></v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >AGBCODE: {{ ziekenhuis.AGBCODE }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >MQID: {{ ziekenhuis.MQID }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Locnr: {{ ziekenhuis.Locnr }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Organisatienummer:
                    {{ ziekenhuis.Organisatienummer }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Organisatie:
                    {{ ziekenhuis.Organisatie }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Naam: {{ ziekenhuis.Naam }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Straat: {{ ziekenhuis.Straat }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Nummer: {{ ziekenhuis.Nummer }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Postcode: {{ ziekenhuis.Postcode }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >PC6: {{ ziekenhuis.PC6 }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Plaats: {{ ziekenhuis.Plaats }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Organisatiesoort:
                    {{ ziekenhuis.Organisatiesoort }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Type: {{ ziekenhuis.Type }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Type_code: {{ ziekenhuis.Type_code }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Latitude: {{ ziekenhuis.Latitude }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Longitude: {{ ziekenhuis.Longitude }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    ziekenhuis() {
      return this.$store.getters.getZiekenhuis(this.id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
