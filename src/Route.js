import HomePage from "./pages/HomePage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

export const routes = [
    {path: '/', component: HomePage, name: 'Home'},
    {path: '/:pathMatch(.*)*', component: NotFoundPage}
]