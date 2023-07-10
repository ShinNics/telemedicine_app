const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: 'patient', component: () => import('pages/patients/IndexPage.vue') }
  //   ]
  // },

  {
    path: "/guest",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      { path: "login", component: () => import("pages/LoginPage.vue") },
      {
        path: "register",
        component: () => import("pages/RegistrationPage.vue"),
      },
    ],
  },

  {
    path: "/auth",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "patients",
        name: "Patients",
        icon: "personal_injury",
        component: () => import("pages/patients/IndexPage.vue"),
      },
      {
        path: "appointments",
        name: "Appointments",
        icon: "calendar_month",
        component: () => import("pages/AppointmentPage.vue"),
      },
      {
        path: "chats",
        name: "Chats",
        icon: "chat",
        component: () => import("pages/ChatsPage.vue"),
      },
      {
        path: "consultations",
        name: "Consultations",
        icon: "record_voice_over",
        component: () => import("pages/ConsultationPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
