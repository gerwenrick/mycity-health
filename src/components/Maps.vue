<template>
  <div>
    <l-map
      @ready="onReady"
      @update:zoom="zoomUpdate"
      @update:center="centerUpdate"
      :zoom="zoom"
      :center="center"
      style="height: 80vh; width: 100%"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <!-- <l-marker :lat-lng="marker" /> -->
      <l-marker
        v-for="ambulance in ambulances"
        :key="ambulance.id"
        :lat-lng="latLng(ambulance.Latitude, ambulance.Longitude)"
      >
        <l-icon
          :icon-size="iconSize"
          :icon-url="icon2"
          :icon-anchor="iconAnchor"
        />
        <l-popup>
          <h5>{{ ambulance.Name }}</h5>
          <div class="availAmbu">
            {{ ambulance.Beschikbaarheid }}
          </div>
          <p>
            {{ ambulance.Straat }},
            <br />
            {{ ambulance.Postcode }} {{ ambulance.Plaats }}
            <br />
            Tel.nr.:
            <span style="font-size: 1.1em; font-weight: 600">050-1234567</span>
          </p>
          <div>
            <p>
              Beschikbare voertuigen:
              <span style="font-size: 1.1em; font-weight: 600">{{
                ambulance.Voertuigen
              }}</span>
            </p>
          </div>
        </l-popup>
      </l-marker>

      <l-marker
        v-for="ziekenhuis in ziekenhuizen"
        :key="ziekenhuis.id"
        :lat-lng="latLng(ziekenhuis.Latitude, ziekenhuis.Longitude)"
      >
        <l-icon
          :icon-size="iconSize"
          :icon-url="icon1"
          :icon-anchor="iconAnchor"
        />
        <l-popup>
          <h4>{{ ziekenhuis.Naam }}</h4>
          <div class="zkh-bezet-bar">
            <div
              class="progress"
              :style="{
                width:
                  bezetting(
                    ziekenhuis.Capaciteit_bezet,
                    ziekenhuis.Capaciteit_totaal
                  ) + '%',
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
          <p>
            {{ ziekenhuis.Straat }} {{ ziekenhuis.Nummer }},
            <br />
            {{ ziekenhuis.Postcode }} {{ ziekenhuis.Plaats }}
            <br />
            <span class="zkh-tel">{{ ziekenhuis.Telnr }}</span>
          </p>
          <v-btn :to="'/ziekenhuizen/'" @click="onLoadZiekenhuis(ziekenhuis.id)"
            >Meer Informatie</v-btn
          >
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { latLng } from "leaflet";
import zkhIcon from "@/assets/images/zkhIcon.png";
import ambuIcon from "@/assets/images/ambuIcon.png";
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";

export default {
  name: "Maps",
  data() {
    return {
      ziekenhuis: [],
      ambulance: [],
      zoom: 8,
      center: [52.092876, 5.10448],
      currentZoom: 8,
      currentCenter: [52.092876, 5.10448],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      // url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      marker: latLng(47.41322, -1.219482),
      icon1: zkhIcon,
      icon2: ambuIcon,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
  },
  computed: {
    ...mapState(["userProfile", "ziekenhuizen", "ambulances"]),
  },
  mounted: {},
  methods: {
    onReady() {},
    onLoadZiekenhuis(id) {
      this.$router.push("/ziekenhuizen/" + id);
    },
    latLng: function (lat, lng) {
      return latLng(lat, lng);
    },
    centerUpdate: function (center) {
      this.currentCenter = center;
    },
    zoomUpdate: function (zoom) {
      this.currentZoom = zoom;
    },
    bezetting(bezet, totaal) {
      return Math.floor((bezet / totaal) * 100);
    },
  },
};
</script>

<style lang="scss" scoped></style>
