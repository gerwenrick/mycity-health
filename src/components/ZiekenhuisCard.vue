<template>
  <div class="zkhItem">
    <div class="itemTitle">
      <h5>{{ Naam }}</h5>
    </div>
    <div class="itemStatus">
      <p>status</p>
    </div>
    <div class="itemInfo">
      <p>{{ Straat }} {{ Nummer }}, {{ Postcode }} {{ Plaats }}</p>
    </div>
    <div class="itemKind">
      <p>{{ Type }}</p>
    </div>
    <div class="itemCapacity">
      <p>
        <bold>Capaciteit</bold>
      </p>
    </div>
    <div class="itemSpeciality">
      <p>
        <bold>Specialiteit</bold>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZiekenhuisCard",
  props: [
    "naam",
    "id",
    "AGBCODE",
    "MQID",
    "Locnr",
    "Organisatienummer",
    "Organisatie",
    "Naam",
    "Straat",
    "Nummer",
    "Postcode",
    "PC6",
    "Plaats",
    "Organisatiesoort",
    "Type",
    "Type_code",
    "Latitude",
    "Longitude"
  ]
};
</script>
