import { createWebHistory, createRouter } from 'vue-router'
import AboutViews from '@/views/AboutViews.vue'
import SkillsViews from '@/views/SkillsViews.vue'
import ExperienceViews from '@/views/ExperienceViews.vue'
import ContactViews from '@/views/ContactViews.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutViews,
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsViews,
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceViews,
  },
  // {
  //   path: '/projects',
  //   name: 'projects',
  //   component: ExperienceViews,
  // },
  {
    path: '/contact',
    name: 'contact',
    component: ContactViews,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
