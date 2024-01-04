export default [
  {
    path: '/',
    name: 'Main',
  },
  {
    path: '/computer-science',
    name: 'computer-science',
    component: () => import('../pages/books/computer-science/index.vue')
  },
  {
    path: '/type-script',
    name: 'type-script',
    component: () => import('../pages/books/type-script/index.vue')
  }
]
