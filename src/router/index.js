import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
import HomeView from "../views/HomeView.vue"
import ListeEmploye from "../views/ListeEmploye.vue"
import AjoutConge from "../views/AjoutConge.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/login",
      name:"loginView",
      component:LoginView
    },
    {
      path:"/home",
      name:"homeview",
      component:HomeView
    },
    {
      path:"/liste",
      name:"listeemploye",
      component:ListeEmploye
    },
    {
      path:"/ajout",
      name:"ajoutconge",
      component:AjoutConge
    }
  ]
  
})

export default router
