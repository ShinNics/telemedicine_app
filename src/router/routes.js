
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/patients/IndexPage.vue') }
    ]
  },

  // {
  //   path: '/guest',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: 'login', component: () => import('pages/IndexPage.vue') },
  //     { path: 'register', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },

  // {
  //   path: '/auth',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: 'patients', component: () => import('pages/patients/IndexPage.vue') },
  //     { path: 'appointments', component: () => import('pages/IndexPage.vue') },
  //     { path: 'chats', component: () => import('pages/IndexPage.vue') },
  //     { path: 'consultations', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
