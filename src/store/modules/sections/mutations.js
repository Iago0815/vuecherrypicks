export default {

   setSections(state,payload) {

       state.sections = payload;

   },    

   setCurrentSection(state,payload)
 {
        state.currentSection = payload;
 }, 

  newSection({sections},payload) {

         sections.push({
        id: (new Date()).getTime(),
        text: payload.value
   })
  },

  deleteSection({sections},payload) {

         const objIndex = sections.findIndex(section => section.id == payload);

           console.log(objIndex,"---",payload)

         sections.splice(objIndex,1)
  }
}