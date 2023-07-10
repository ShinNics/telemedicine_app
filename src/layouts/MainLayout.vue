<script setup>
import routes from "src/router/routes.js";
import { computed, onMounted } from "vue";

const tabs = computed(() => {
  const layout = routes.filter((item) => {
    return item.path === "/auth";
  });
  const children = layout.map((item) => {
    return item.children;
  });
  //return routes
  // .filter((item) => {
  //   return item.path === "/auth";
  // })
  // .map((item) => {
  //   return item.children;
  // });
  return children[0];
});

// onMounted(() => {

//   //console.log(tabs.value);
// });
</script>
<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated class="bg-brown-9 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://th.bing.com/th/id/R.2bce72a792d79b8179b25c0ab38a170c?rik=lEYq3n0n%2fEeKcw&riu=http%3a%2f%2fapmcofficial.com%2fimages%2fAPMC+Logo.png&ehk=MhgPkUHAtaCOxpPVy2TFjvB0YvoXI82WvCCtHzdzmak%3d&risl=&pid=ImgRaw&r=0"
            />
          </q-avatar>
          AMAI PAKPAK MEDICAL CENTER
        </q-toolbar-title>

        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab
          v-for="tab in tabs"
          :key="tab.path"
          :to="'/auth/' + tab.path"
          :label="tab.name"
        />
      </q-tabs> -->
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item
          v-for="tab in tabs"
          :key="tab.path"
          :to="'/auth/' + tab.path"
          class="bg-brown-2 text-left"
        >
          <q-item-section avatar>
            <q-icon color="teal-9" :name="tab.icon" />
          </q-item-section>
          <q-item-section avatar>{{ tab.name }}</q-item-section>
        </q-item>
      </q-list>
      <!-- <q-drawer-link icon="mail" to="/account">Account</q-drawer-link> -->

      <!-- <a
        class="q-item q-item-type row no-wrap q-item--dark q-router-link--exact-active doc-layout__item--active q-item--clickable q-link cursor-pointer q-focusable q-hoverable doc-layout__item non-selectable bg-brown-4"
        role="listitem"
        tabindex="0"
        href="/auth/patients"
        style="padding-left: 21.6px"
        ><div class="q-focus-helper" tabindex="-1"></div>
        <div
          class="q-item__section column q-item__section--main justify-center"
        >
          Patients
        </div></a
      >

       -->
    </q-drawer>

    <!-- <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
       drawer content 
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
             <img src="https://th.bing.com/th/id/R.2bce72a792d79b8179b25c0ab38a170c?rik=lEYq3n0n%2fEeKcw&riu=http%3a%2f%2fapmcofficial.com%2fimages%2fAPMC+Logo.png&ehk=MhgPkUHAtaCOxpPVy2TFjvB0YvoXI82WvCCtHzdzmak%3d&risl=&pid=ImgRaw&r=0">
          </q-avatar> -->
          <div class="text-subtitle2">
            Copyright © 2023 All Rights Reserved.
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
