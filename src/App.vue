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

  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },

  methods: {
    loadData() {
   //   this.$store.dispatch("loadSections");
   //   this.$store.dispatch("loadCPs");
    //  this.$store.dispatch("loadOneCP");
    },
  },
  created() {
    this.$store.dispatch('autoLogin');
  },

  watch: {
    didAutoLogout(curVal,oldValue) {
      if(curVal && curVal !== oldValue) {
          this.$router.replace('/signin');

      }
    }
  }
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

