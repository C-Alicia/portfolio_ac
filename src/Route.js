import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import ParcoursPage from "./pages/ParcoursPage.vue";


export const routes = [
    {path: '/', component: HomePage, name: 'Home'},
    {path: '/propos', component: AboutPage, name: 'Propos'},
    {path: '/parcours', component: ParcoursPage, name: 'Parcours'},
    {path: '/:pathMatch(.*)*', component: NotFoundPage}
]