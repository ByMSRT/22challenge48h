import { createRouter, createWebHistory } from "vue-router"
import Wiki from './components/Wiki.vue'
import acceuil from './components/Acceuil.vue'
import QuiSuisJe from './components/QuiSuisJe.vue'

export default createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : "/",
            name : "acceuil",
            component : acceuil,
        },
            {
                path : "/wiki",
                name : "wiki",
                component : Wiki,
            },
            {
                path : "/game",
                name : "game",
                component : QuiSuisJe,
            }
    ]
})