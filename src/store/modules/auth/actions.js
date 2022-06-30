let timer;

export default {

    async signin(context,payload) {

           const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAoBMy2o_i99F4GPq-pFCtruJQc42VaGsQ',{method:'POST',
    

         body: JSON.stringify({

             email: payload.email,
             password: payload.password,
            returnSecureToken: true
         })
     })
  
     const data = await response.json();

     if(!response.ok) {

        const error = new Error(data.message || 'Failed to authenticate.');
       
        throw error;
     }

      const expiresIn = +data.expiresIn * 1000 * 450;
      const expirationDate = new Date().getTime() + expiresIn;

     localStorage.setItem('tokenExpiration',expirationDate)
     localStorage.setItem('token',data.idToken);
     localStorage.setItem('userId',data.localId);

    timer = setTimeout(function(){

        context.dispatch('autoLogout');
     },expiresIn)
    
     
     context.commit('setUser', { 
         token:data.idToken,
         userId:data.localId,
      
       
     })
      }, 

    autoLogin(context) {

        const token  = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = +tokenExpiration - new Date().getTime();

        if(expiresIn < 0) {
            return;

        }

        timer = setTimeout(function() {

          context.dispatch('autoLogout')
        },expiresIn)

        if(token && userId) {

            context.commit('setUser', {
                token:token,
                userId:userId,
               
            })
        }

    },
    async signup(context,payload) {

        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAoBMy2o_i99F4GPq-pFCtruJQc42VaGsQ',{method:'POST',
    

         body: JSON.stringify({

             email: payload.email,
             password: payload.password,
            returnSecureToken: true
         })
     })

     const responseData = await response.json();

     if(!response.ok) {

        
        const error = new Error(responseData.error.message || 'Failed to authenticate.');
       
        throw error;
     }
         
         const newUser = {

            uname: payload.uname,
            name: payload.name,
            gender: payload.gender,
            language: payload.language,

      }

      const responseUserData = await fetch(`https://vuecherrypicks-default-rtdb.europe-west1.firebasedatabase.app/user/${responseData.localId}.json?auth=`+responseData.idToken,{method:'POST',
      
        body:JSON.stringify(newUser)
      });


      const res = await responseUserData.json();

      if(!res.ok) {
        //do nothing
        
      } else {
        return res.json();
      } 

       // console.log(responseData.localId,payload.email,payload.uname,payload.name,payload.gender,payload.language);

       //https://web.dev/javascript-async-functions/
       //2 awaits at the same time


     context.commit('setUser', { 
         token:responseData.idToken,
         userId:responseData.localId,
         tokenExpiration:responseData.expiresIn
     })
     },
     

      logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('gender');
    localStorage.removeItem('language');
    localStorage.removeItem('name');
    localStorage.removeItem('uname');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);


    

    context.commit('setUser', {
      token: null,
      userId: null
    });

    context.commit('setUserData', {

      gender:null,
      language:null,
      name:null,
      uname:null
    })
  },

  async fetchUserData(context) {

       //execute async fetchUserData function, should work!!

          const userId = context.getters.userId;
         const token = context.getters.token;

         const responseUserData = await fetch(`https://vuecherrypicks-default-rtdb.europe-west1.firebasedatabase.app/user/${userId}.json?auth=`+token)

       const dataUser = await responseUserData.json();

     if (!responseUserData.ok) {
       const error = new Error(dataUser.message || 'Failed to fetch!');
       throw error;
     }

     const keyDataUser = Object.keys(dataUser);

      try {

           localStorage.setItem('gender',dataUser[keyDataUser].gender);
           localStorage.setItem('language',dataUser[keyDataUser].language);
           localStorage.setItem('name',dataUser[keyDataUser].name);
           localStorage.setItem('uname',dataUser[keyDataUser].uname);
    
     
          context.commit('setUserData', { 
             gender:dataUser[keyDataUser].gender,
             language:dataUser[keyDataUser].language,
             name:dataUser[keyDataUser].name,
             uname:dataUser[keyDataUser].uname
       
     })




      }

      catch(err){

            this.error = new Error(err.message || 'Failed to authenticate, try later');
            throw this.error;

          }
  },
  autoLogout(context) {

    context.dispatch('logout');
    context.commit('setAutoLogout');

 

 
 },
 
}


