export default {

 userId(state) {
   return state.userId
        },
   

  token(state) {
    return state.token;
  },
    
  isAuthenticated(state) {
    return !!state.token;
  },

   didAutoLogout(state) {

    return state.didAutoLogout;
  },

  gender(state) {
    return state.gender;
  },

  language(state) {
    return state.language;
  },
  name(state) {
    return state.name;
  },

  uname(state) {
    return state.uname;
  },

  signInOrSignUp(state) {
    return state.signInOrSignUp
  }
  

}