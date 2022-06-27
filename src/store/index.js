import { createStore } from "vuex";

import cpModule from './modules/cps/index.js';
import sectionModule from './modules/sections/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({

    modules: {
        cherrypicks: cpModule,
        sections: sectionModule,
        auth: authModule
    },

   
})

export default store;
