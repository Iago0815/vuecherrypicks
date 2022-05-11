import { createRouter, createWebHistory} from 'vue-router';

import CherryPicksPage from "./pages/CherryPicksPage.vue";
import NewSection from "./pages/NewSection.vue";

const router = createRouter({

    history:createWebHistory(),
    routes:[

           { path: '/', redirect: '/cps' },
        {path:"/cps", component: CherryPicksPage},
        {path:"/section", component: NewSection}
    ]
});

export default router;