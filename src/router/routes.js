
const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: 'patient', component: () => import('pages/patients/IndexPage.vue') }
  //   ]
  // },

  {
    path: '/guest',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegistrationPage.vue') }
    ]
  },

  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'patients', component: () => import('pages/patients/IndexPage.vue') },
      { path: 'appointments', component: () => import('pages/AppointmentPage.vue') },
      { path: 'chats', component: () => import('pages/ChatsPage.vue') },
      { path: 'consultations', component: () => import('pages/ConsultationPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
