<template>
  <li>
    <a class="cp_header" v-on:click="displayCurrentCP">{{ cpTitle }}</a>
  </li>
</template>

<script>
export default {
  props: ["cpTitle", "cpId", "sectionId"],

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    displayCurrentCP() {
      //get current CP in order to display the CPs in the CherryPicks component
      this.$store.dispatch("getCurrentCP", { value: this.cpId });

      //get current section, in order to display the section in the  CherryPicks component
      this.$store.dispatch("setCurrentSection", { value: this.sectionId });

      //set newCP to false so that the input modules for a new CP are hidden
      this.$store.dispatch("newCP", { value: false });
    },
  },
};
</script>

<style scoped>
</style>