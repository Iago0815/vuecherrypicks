<template>
  <div class="cpform-wrapper">
    <div class="form-group">
      <label class="headline" for="headline">Headline, <b>Section: {{ getCurrentSection }}</b></label>

      <input v-if="isNewCP" type="headline" class="form-control" id="cp_headline" v-model="headline"
        ref="forNewHeadline" />

      <input v-else type="headline" class="form-control" id="cp_headline" v-model="cpHeadline" />

      <label class="labelTextareas">Text</label>
      <textarea v-if="isNewCP" class="form-control myTextareas" rows="16" v-model="text" ref="forNewText">
      </textarea>

      <textarea v-else class="form-control myTextareas" rows="16" v-model="cpBody"> 
      </textarea>

      <div class="bottom-controls">
        <div class="bottom-controls-left">
          <button v-if="isNewCP" class="btn btn-success update" type="submit" @click="createNewCP">
            Create
          </button>

          <div v-else>
            <button class="btn btn-success update" type="submit" @click="updateCP">
              Update
            </button>
            <button class="btn btn-danger" type="submit" style="color: #fff" @click="deleteCP">
              Delete
            </button>
           
          </div>
        </div>
        <div v-if="!isNewCP" class="bottom-controls-right">
          <div id="created">
            CREATED ON: <span>{{ getCreationDate }}</span>
          </div>
          <div id="updated">
            LAST UPDATE: <span>{{ getUpdatedDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      text: "",
      headline: "",
      updated_text: "",
      updated_headline: "",
    };
  },

  computed: {
    cpHeadline: {
      get() {
        return this.$store.getters.currentCP.headline;
      },
      set(val) {
        this.updated_headline = val;
      },
    },

    cpBody: {
      get() {
        return this.$store.getters.currentCP.body;
      },
      set(val) {
        this.updated_text = val;
      },
    },

    getCreationDate() {
      return this.createDate(this.$store.getters.currentCP.newdate);
    },

    getUpdatedDate() {
      return this.createDate(this.$store.getters.currentCP.updated);
    },

    getCurrentSection() {
      return this.$store.getters.getCurrentSection.text;
    },

    isNewCP() {
      return this.$store.getters.isNewCP;
    },

    returnToken() {

      return this.$store.getters.token;
    }
  },

  methods: {
    createNewCP() {
      const secID = this.$store.getters.getCurrentSection.id;

      this.$store.dispatch("addNewCP", {
        secID: secID,
        newCPText: this.text,
        newCPHeadline: this.headline,
      });

      // this.$store.dispatch("newCP", { currentSectionId: false });

      //refresh the page

      this.$router.go();

      //create new CP and save it in the section array

      //sectionID, headline, body
    },

    updateCP() {
      let myText = "";
      let myHeadline = "";

      if (this.updated_text == "") {
        myText = this.$store.getters.currentCP.body;
      } else {
        myText = this.updated_text;
      }

      if (this.updated_headline == "") {
        myHeadline = this.$store.getters.currentCP.headline;
      } else {
        myHeadline = this.updated_headline;
      }

     

      this.$store.dispatch("updateCP", {
        id: this.$store.getters.currentCP.id,
        updatedHeadline: myHeadline,
        updatedText: myText,
      });
    },
    deleteCP() {
      if (confirm("Are you really want to delete the cherrypick?")) {
        this.$store.dispatch("deleteCP", {
          id: this.$store.getters.currentCP.id,
        });

        this.$router.go();
      }
    },

    createDate(timestamp) {
      const dateObject = new Date(timestamp);

      return dateObject.toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    },
  },
};
</script>

<style scoped>
.labelTextareas {
  margin-top: 20px;
}

.cpform-wrapper {
  background-color: #eee;
  text-align: center;
  height: 38.8rem;
}

.form-group {
  width: 95%;
  padding-left: 2rem;
  padding-top: 1rem;
}

/* bottom buttons*/

.bottom-controls {
  display: flex;
  padding: 2rem 1rem;
  max-width: 55rem;
  justify-content: space-between;
}

.updateCP {
  margin-top: 20px;
}

/* styling DATE information */

#created,
#updated {
  padding-top: 0.5rem;
}

#created {
  margin-right: 1rem;
}

#created span,
#updated span {
  border: 2px solid #ffc107;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
}

button.update {
  margin-right: 2rem;
}

.bottom-controls-left {
  display: flex;
}

.bottom-controls-right {
  display: flex;
}
</style>