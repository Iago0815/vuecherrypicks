export default {

    setCPs(state,payload) {
        state.cherrypicks = payload;

        const currentCPfistValue = payload.slice(0,1);
        state.currentCP = currentCPfistValue;


    },

    getCurrentCP(state,payload) {
        state.currentCP = payload;


    },

    newCP(state,payload) {
        state.newCP = payload.value

        
       
    },

    addNewCP(state,payload) {
       state.cherrypicks.push(payload)

      

      
    },

    updateCP({cherrypicks},payload) {
        
         if(payload.uphd != "") {
        cherrypicks[payload.objIndex].headline = payload.uphd;
         }

         if( payload.uptx != "") {
        cherrypicks[payload.objIndex].body = payload.uptx;
         }
         cherrypicks[payload.objIndex].updated = payload.timestamp;

        
        
    },

    deleteCP({cherrypicks},payload) {


        const objIndex = cherrypicks.findIndex(cp => cp.id == payload);

        console.log(objIndex,"---",payload)

         cherrypicks.splice(objIndex,1)
    }

  
    

   
    
    
}