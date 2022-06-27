<template>
  <div class="accordion d-flex" @click="toggleCPs">
    <span class="me-auto">{{ sectionTitle }}</span>

    <button class="btn btn-success btn-sm ms-1" @click.stop="openNewCP">
      +</button
    ><button class="btn btn-danger btn-sm ms-1" @click.stop="deleteSection">
      &times;
    </button>
  </div>
  <div class="panel" v-bind:class="{ show: isActive }">
    <ul>
      <accordion-cherry-picks
        v-for="cp in filteredCPs"
        :key="cp.id"
        :cpTitle="cp.headline"
        :cpId="cp.id"
        :sectionId="sectionId"
      ></accordion-cherry-picks>
    </ul>
  </div>
</template>


<script>
import AccordionCherryPicks from "./AccordionCherryPicks.vue";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  components: { AccordionCherryPicks },

  props: ["sectionTitle", "sectionId"],

  

  methods: {
    toggleCPs() {
      this.isActive = !this.isActive;
    },

    openNewCP() {
      this.$store.dispatch("setCurrentSection", { value: this.sectionId });
      this.$store.dispatch("newCP", { value: true });
    },

    deleteSection() {
      this.$store.dispatch("deleteSection", { value: this.sectionId });
    },
  },

  computed: {
    filteredCPs() {
      const cps = this.$store.getters.cpicks;

      const result = cps.filter((cp) => cp.section_id == this.sectionId);
      return result;

      //fetch CPs from firestore
    },
  },
};
</script>

<style>
div.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.8s;
}

.active,
.accordion:hover {
  background-color: #ccc;
}

.panel {
  background-color: white;
  overflow: hidden;
  transition: 0.8s ease-in-out;
  opacity: 0;
  max-height: 0;
}

.panel ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  /* border:1px solid red; */
}

.panel ul li {
  padding: 0;
  margin: 0;
}

.panel ul li a {
  padding: 15px;
  text-decoration: none;
  display: block;
  color: black;
  /* border:1px solid green; */
}

.panel ul li a:hover {
  background-color: #3d4849;
  color: #ffffff !important;
}

.panel.show {
  opacity: 1;
  max-height: 3000px;
}

.panel.hide {
  opacity: 0;
  height: 0;
}
</style>