<template>
  <div class="grid-container">
    <the-header></the-header>

    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: { TheHeader },

  methods: {
    loadData() {
      this.$store.dispatch("loadSections");
      this.$store.dispatch("loadCPs");
      this.$store.dispatch("loadOneCP");
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style>
.grid-container {
  max-width: 1300px;
  margin: 0 auto;
  height: 48rem;
  border: 1px solid #888888;
}

/*
Firebase connection (Schwarzmüller videos)
where are API requests necessary

*/
</style>

