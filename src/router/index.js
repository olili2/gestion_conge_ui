import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
import ListEmploye from "../views/ListEmploye.vue"
import ListConge from "../views/ListConge.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/login",
      name:"loginView",
      component:LoginView
    },
    {
      path:"/listemploye",
      name:"listemploye",
      component:ListEmploye
    },
    {
      path:"/listconge",
      name:"listconge",
      component:ListConge
    }
  ]
})

export default router
