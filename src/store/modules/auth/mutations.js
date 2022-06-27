export default {

   setUser(state,payload) {

    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
   

  
   },
   setUserData(state,payload) {

      state.gender = payload.gender;
      state.language = payload.language;
      state.name = payload.name;
      state.uname = payload.uname;

   },
   setAutoLogout(state) {

      state.didAutoLogout = true;
   },

   signInOrSignUp(state,payload) {

     state.signInOrSignUp = payload;
 }


}