<template>
  <div class="flex-container">
    <div class="box-left sections-box">
      <cherry-accordion
        v-for="section in fetchSections"
        :key="section.id"
        :section-id="section.id"
        :section-title="section.text"
      ></cherry-accordion>
    </div>
    <div class="box-right">
      <cherry-picks></cherry-picks>
    </div>
  </div>
</template>

<script>
import CherryAccordion from "../components/SectionsAccordion.vue";
import CherryPicks from "../components/CherryPicks.vue";

export default {
  data() {
    return {
      component: this.$store.getters.getCurrentInputModule,
    };
  },

  updated() {
    this.component = this.$store.getters.getCurrentInputModule;

   
  },

  components: { CherryAccordion, CherryPicks },

  computed: {
    fetchSections() {
      return this.$store.getters.sections;

      //fetch section from firestore!
    },
  },

  mounted() {

     if (this.$store.getters.token) {

     this.$store.dispatch("loadSections");
     this.$store.dispatch("loadCPs");
     this.$store.dispatch("loadOneCP");
      

     //load UserData and store Userdata in localstorage
       this.$store.dispatch('fetchUserData')

     }
  }
  

  
};
</script>


<style>
.flex-container {
  display: flex;
  max-width: 1300px;
}

.box-left {
  width: 30%;
}

.box-right {
  width: 70%;
  background-color: #eee;
}

.sections-box {
  margin: 0px;
  padding: 0px;
  max-height: 39rem;

  overflow: hidden;
  overflow-y: scroll;
}
</style>