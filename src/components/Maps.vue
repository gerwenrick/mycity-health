<template>
  <div>
    <h3>Maps</h3>
    <l-map
      @update:zoom="zoomUpdate"
      @update:center="centerUpdate"
      :zoom="zoom"
      :center="center"
      style="height: 80vh; width: 100%"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <!-- <l-marker :lat-lng="marker" /> -->
      <l-marker
        v-for="ziekenhuis in ziekenhuizen"
        :key="ziekenhuis.id"
        :lat-lng="latLng(ziekenhuis.Latitude, ziekenhuis.Longitude)"
      >
        <l-icon :icon-size="iconSize" :icon-url="icon" :icon-anchor="iconAnchor" />
        <l-popup>
          <h4>{{ziekenhuis.Naam}}</h4>
          <p>{{ ziekenhuis.Straat }} {{ ziekenhuis.Nummer }}, {{ ziekenhuis.Postcode }} {{ ziekenhuis.Plaats }}</p>
          <v-btn
            :to="'/ziekenhuizen/' + ziekenhuis.id"
            @click="onLoadZiekenhuis(ziekenhuis.id)"
          >Meer Informatie</v-btn>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { latLng } from "leaflet";
import zkhIcon from "@/assets/images/zkhIcon.png";
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";

export default {
  name: "Maps",
  data() {
    return {
      ziekenhuis: [],
      zoom: 8,
      center: [52.092876, 5.10448],
      currentZoom: 8,
      currentCenter: [52.092876, 5.10448],
      // url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      marker: latLng(47.41322, -1.219482),
      icon: zkhIcon,
      iconSize: [30, 30],
      iconAnchor: [15, 30]
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup
  },
  computed: {
    ...mapState(["userProfile", "ziekenhuizen"])
  },
  mounted: {},
  methods: {
    onLoadZiekenhuis(id) {
      this.$router.push("/ziekenhuizen/" + id);
    },
    latLng: function(lat, lng) {
      return latLng(lat, lng);
    },
    centerUpdate: function(center) {
      this.currentCenter = center;
    },
    zoomUpdate: function(zoom) {
      this.currentZoom = zoom;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
