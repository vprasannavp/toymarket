import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import ViewJobs from '../views/ViewJobs.vue'
import JobDetails from '../views/JobDetails.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/jobs/:userName',
    name: 'ViewJobs',
    beforeEnter : guardMyroute,
    component: ViewJobs
  },
  {
    path: '/job/:id',
    name: 'JobDetails',
    beforeEnter : guardMyroute,
    component: JobDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
if(localStorage.getItem('LoggedUser'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/'); // go to '/login';
 }
}

export default router
