<template>
  <div class="content">
    <h1>Ziekenhuizen</h1>
    <div id="ziekenhuis-page">
      <section>
        <div class="hosp-left">
          <div class="filters">
            <h5>{{ userProfile.name }}</h5>
            <p>{{ userProfile.title }}</p>
            <div class="create-post">
              <p>Alle ziekenhuizen</p>
            </div>
          </div>
        </div>
        <div class="hosp-right">
          <div class="zkhContainer" v-if="ziekenhuizen.length">
            <ZiekenhuisCard
              v-for="ziekenhuis in ziekenhuizen"
              :key="ziekenhuis.id"
              :id="ziekenhuis.id"
              :AGBCODE="ziekenhuis.AGBCODE"
              :MQID="ziekenhuis.MQID"
              :Locnr="ziekenhuis.Locnr"
              :Organisatienummer="ziekenhuis.Organisatienummer"
              :Organisatie="ziekenhuis.Organisatie"
              :Naam="ziekenhuis.Naam"
              :Straat="ziekenhuis.Straat"
              :Nummer="ziekenhuis.Nummer"
              :Postcode="ziekenhuis.Postcode"
              :PC6="ziekenhuis.PC6"
              :Plaats="ziekenhuis.Plaats"
              :Organisatiesoort="ziekenhuis.Organisatiesoort"
              :Type="ziekenhuis.Type"
              :Type_code="ziekenhuis.Type_code"
              :Latitude="ziekenhuis.Latitude"
              :Longitude="ziekenhuis.Longitude"
            ></ZiekenhuisCard>
            <!-- <div v-for="ziekenhuis in ziekenhuizen" :key="ziekenhuis.id" class="post">
                <ZiekenhuisCard :id="ziekenhuis.id" :naam="ziekenhuis.Naam" />
            </div>-->
          </div>
          <div class="zkhContainer" v-else>
            <p class="no-results">There are currently no hospitals</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ZiekenhuisCard from "../components/ZiekenhuisCard";

export default {
  data() {
    return {
      ziekenhuis: []
    };
  },
  props: ["id", "name"],
  components: {
    ZiekenhuisCard
  },
  computed: {
    ...mapState(["userProfile", "ziekenhuizen"])
  }
};
</script>

<style lang="scss" scoped></style>
