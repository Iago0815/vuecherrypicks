import { createRouter, createWebHistory} from 'vue-router';

import CherryPicksPage from "./pages/CherryPicksPage.vue";
import NewSection from "./pages/NewSection.vue";
import SignUp from "./pages/auth/SignUp.vue";
import SignIn from "./pages/auth/SignIn.vue";
import NotFound from './pages/NotFound.vue';
import store from '../src/store/index';


const router = createRouter({

    history:createWebHistory(),
    routes:[

           { path: '/',   get component() {
                if (store.getters.isAuthenticated) {
                    return CherryPicksPage;
                } else {
                    return SignIn;
                }
            }},
        {path:"/cps", component: CherryPicksPage, meta:{ requiresAuth:true }},
        {path:"/section", component: NewSection,  meta:{ requiresAuth:true }},
        {path:"/signup", component:SignUp, meta:{ doesNotRequireAuth:true,  },
           beforeEnter: () => {
             store.commit('signInOrSignUp',true);
           }
    },
          {path:"/signin", component:SignIn, meta:{ doesNotRequireAuth:true },
         beforeEnter: () => {
            store.commit('signInOrSignUp',false);
        }},
            { path: '/:notFround(.*)', component: NotFound }
    ]
});

router.beforeEach(function(to,_,next) {
    if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/signin');
    }

    if(to.meta.doesNotRequireAuth && store.getters.isAuthenticated) {
        next('/cps');
    }

    else {
        next();
    }

})


export default router;


//rules for firestore 

//{  
//  "rules": {
    
//    "cps": {
      
//      ".read" : "auth !== null",
//      ".write" : "auth !== null"
//    },
//      "sections": {
        
//        ".read" : "auth !== null",
//      ".write" : "auth !== null"
//      }, 
//  }
//}