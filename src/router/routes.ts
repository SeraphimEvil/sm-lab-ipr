export default [
  {
    path: '/',
    name: 'Main',
    // component: () => import('../App.vue')
  },
  {
    path: '/computer-science',
    name: 'computer-science',
    component: () => import('../pages/books/computer-science/ComputerScience.vue')
  }
]
