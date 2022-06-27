import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {

     state() {

        return{
            userId:null,
            token:null,
            didAutoLogout:false,
            signInOrSignUp:false
        }
    },
    mutations,
    actions,
    getters
}

//RULES FOR FIRESTORE

// {
//   "rules": {
    
//     "sections": {
//        ".read": "auth != null",
//        ".write": "auth != null"
      
//     },
      
//        "cps": {
//        ".read": "auth != null",
//        ".write": "auth != null"
      
//     }
   
//   }
// }