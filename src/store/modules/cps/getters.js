export default {

    cpicks(state) {
        return state.cherrypicks;
    },

    hasCPicks(state) {
        return state.cherrypicks && state.cherrypicks.length > 0
    }, 

    currentCP(state) {
        return state.currentCP[0];

    },

    isNewCP(state) {

        return state.newCP;

    },
   
     
}