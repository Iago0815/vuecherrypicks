<template>
  <div class="flex-container">
    <div class="box-right">
      <form @submit.prevent="submitNewSection">
        <div class="form-group">
          <label for="section-new-text"><b>Section Name</b></label>
          <input
            id="section-new-text"
            class="form-control"
            v-model="sectionText"
          />
        </div>

        <button type="submit" id="section-new-button" class="btn btn-success">
          new Section
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionText: null,
    };
  },

  methods: {
    submitNewSection() {
      this.$store.dispatch("newSection", { value: this.sectionText });
      this.$router.push("/cps");
    },
  },
};
</script>


<style scoped>
.flex-container {
  display: flex;
  max-width: 1300px;
  background-color: #eee;
  height: 39rem;
}

.box-right {
  width: 50%;
  background-color: #eee;
  margin: 8rem auto;
}

#section-new-text,
#section-new-button {
  margin-top: 1rem;
}
</style>