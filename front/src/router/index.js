import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Panier from '../views/Panier.vue'
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  }
  ,
  {
    path: '/panier',
    name: 'Panier',
    component: Panier
  }

]

const router = new VueRouter({
  routes
})

export default router
