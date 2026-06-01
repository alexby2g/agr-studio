const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'proyecto/aurea',
        component: () => import('pages/AureaPage.vue')
      },
      {
        path: 'proyecto/carlafit',
        component: () => import('pages/CarlaFitPage.vue')
      }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes