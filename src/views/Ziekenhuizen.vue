<template>
  <div class="content">
    <h1>Ziekenhuizen</h1>

    <v-container class="zkh-filters">
      <v-layout row wrap>
        <h5>Filters</h5>

        <div class="container" row wrap>
          <div id="selectType" class="selectOption">
            <label for="ziekenhuisType">Type: </label>
            <select name="ziekenhuisType" id="ziekenhuisType">
              <option
                v-for="(ziekenhuisType, index) in ziekenhuisTypen"
                :key="index"
                value="ziekenhuisType"
                :id="ziekenhuisType"
              >
                {{ ziekenhuisType }}
              </option>
            </select>
          </div>

          <div id="selectSpecial" class="selectOption">
            <label for="ziekenhuisSpecial">Specialiteiten: </label>
            <select name="ziekenhuisSpecial" id="ziekenhuisSpecial">
              <option
                v-for="(ziekenhuisSpecial, index) in ziekenhuisSpecialiteiten"
                :key="index"
              >
                {{ ziekenhuisSpecial }}
              </option>
            </select>
          </div>
        </div>
        <div id="soortCheckbox"></div>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 offset-sm1 offset-md2 class="zkh-list">
          <v-card
            class="mx-auto zkh-card"
            max-width="450"
            outlined
            v-for="ziekenhuis in ziekenhuizen"
            :key="ziekenhuis.id"
            :to="'/ziekenhuizen/' + ziekenhuis.id"
            @click="onLoadZiekenhuis(ziekenhuis.id)"
            style="cursor: pointer"
          >
            <div class="zkh-Title">
              <v-card-title>
                <h5>{{ ziekenhuis.Naam }}</h5>
              </v-card-title>
            </div>
            <div class="zkh-Adress">
              <p>
                {{ ziekenhuis.Straat }} {{ ziekenhuis.Nummer }},<br />
                {{ ziekenhuis.Postcode }} {{ ziekenhuis.Plaats }}
              </p>
            </div>
            <div class="zkh-Capaciteit">
              Bezetting:<span>{{ ziekenhuis.Capaciteit_bezet }}</span
              >/{{ ziekenhuis.Capaciteit_totaal }}
              <br />
              <div class="zkh-bezet-bar">
                <div
                  class="progress"
                  :style="{
                    width:
                      bezetting(
                        ziekenhuis.Capaciteit_bezet,
                        ziekenhuis.Capaciteit_totaal
                      ) + '%'
                  }"
                ></div>
                <p class="percent">
                  {{
                    bezetting(
                      ziekenhuis.Capaciteit_bezet,
                      ziekenhuis.Capaciteit_totaal
                    )
                  }}%
                </p>
              </div>
            </div>
            <div class="zkh-Soort">{{ ziekenhuis.Type }}</div>
            <div class="zkh-Specialiteit">
              <ul
                v-for="(specialiteit, i) in ziekenhuis.Specialiteiten"
                :key="i"
                class="zkh-Chip"
              >
                <li>
                  <v-chip>{{ specialiteit }}</v-chip>
                </li>
              </ul>
            </div>
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
      ziekenhuis: [],
      ziekenhuisType: [],
      ziekenhuisSpecial: [],
      selectSpecial: []
    };
  },
  // props: ["id", "name"],
  computed: {
    ...mapState([
      "userProfile",
      "ziekenhuizen",
      "ziekenhuisTypen",
      "ziekenhuisSpecialiteiten"
    ])
  },
  methods: {
    onLoadZiekenhuis(id) {
      this.$router.push("/ziekenhuizen/" + id);
    },
    bezetting(bezet, totaal) {
      return Math.floor((bezet / totaal) * 100);
    }
  }
};
</script>

<style lang="scss" scoped></style>
