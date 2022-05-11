import { createStore } from "vuex";

import cpModule from './modules/cps/index.js';
import sectionModule from './modules/sections/index.js';

const store = createStore({

    modules: {
        cherrypicks: cpModule,
        sections: sectionModule
    },

    state() {

        return{
            userId:'c3'
        }
    },
    getters: {
        userId(state) {

            return state.userId
        }
    }
});

export default store;
