import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";


export const routes = [
    {path: '/', component: HomePage, name: 'Home'},
    {path: '/propos', component: AboutPage, name: 'Propos'},
    {path: '/:pathMatch(.*)*', component: NotFoundPage}
]