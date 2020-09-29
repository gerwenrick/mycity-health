<template>
  <div class="content">
    <h1>Ziekenhuizen</h1>

    <v-container class="zkh-filters">
      <v-layout column wrap style="float: left;">
        <h5>Filters</h5>

        <div class="container zkh-filters" row wrap>
          <div id="selectType" class="selectOption">
            <div id="searchZkh">
              <!-- <label for="search">Zoek Ziekenhuis</label> -->
              <input
                id="search"
                type="search"
                placeholder="Zoek Ziekenhuis..."
                v-model="zoekZkh"
              />
            </div>

            <div class="filters">
              <div class="filter">
                <h5>Type</h5>
                <div
                  v-for="(ziekenhuisType, index) in ziekenhuisTypen"
                  :key="index"
                  class="typeBox"
                >
                  <input
                    type="checkbox"
                    v-model="hospTypen"
                    :value="ziekenhuisType"
                    :id="ziekenhuisType"
                  /><label :for="ziekenhuisType">{{ ziekenhuisType }}</label>
                </div>
              </div>

              <div class="filter">
                <h5>Specialiteiten</h5>
                <div
                  v-for="(ziekenhuisSpecial, index) in ziekenhuisSpecialiteiten"
                  :key="index"
                  class="specBox"
                >
                  <input
                    type="checkbox"
                    v-model="hospSpecial"
                    :value="ziekenhuisSpecial"
                    :id="ziekenhuisSpecial"
                  /><label :for="ziekenhuisSpecial">{{
                    ziekenhuisSpecial
                  }}</label>
                </div>
              </div>
            </div>

            <!-- <label for="ziekenhuisSpecial">Specialiteiten: </label>
            <select
              name="ziekenhuisSpecial"
              id="ziekenhuisSpecial"
              v-model="selectedSpecial"
            >
              <option value="Alle Specialiteiten">Alle Specialiteiten</option>
              <option
                v-for="(ziekenhuisSpecial, index) in ziekenhuisSpecialiteiten"
                :key="index"
                :value="ziekenhuisSpecial"
              >
                {{ ziekenhuisSpecial }}
              </option>
            </select> -->
          </div>
        </div>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 offset-sm1 offset-md2 class="zkh-list">
          <v-card
            class="mx-auto zkh-card"
            max-width="450"
            outlined
            v-for="ziekenhuis in filteredZkh"
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
      hospTypen: [],
      hospSpecial: [],
      zoekZkh: ""
    };
  },
  // props: ["id", "name"],
  computed: {
    ...mapState([
      "userProfile",
      "ziekenhuizen",
      "ziekenhuisTypen",
      "ziekenhuisSpecialiteiten"
    ]),
    filteredZkh: function() {
      return this.ziekenhuizen.filter(ziekenhuis => {
        return (
          (this.zoekZkh.length === 0 ||
            ziekenhuis.Naam.toLowerCase().includes(
              this.zoekZkh.toLowerCase()
            ) ||
            ziekenhuis.Plaats.toLowerCase().includes(
              this.zoekZkh.toLowerCase()
            ) ||
            ziekenhuis.Straat.toLowerCase().includes(
              this.zoekZkh.toLowerCase()
            ) ||
            ziekenhuis.Postcode.toLowerCase().includes(
              this.zoekZkh.toLowerCase()
            ) ||
            ziekenhuis.Type.toLowerCase().includes(
              this.zoekZkh.toLowerCase()
            )) &&
          (this.hospTypen.length === 0 ||
            this.hospTypen.includes(ziekenhuis.Type)) &&
          (this.hospSpecial.length === 0 ||
            this.hospSpecial.some(
              r => ziekenhuis.Specialiteiten.indexOf(r) >= 0
            ))
        );
      });
    }
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
