<template>
  <q-layout view="hHh lpR lFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://th.bing.com/th/id/R.2bce72a792d79b8179b25c0ab38a170c?rik=lEYq3n0n%2fEeKcw&riu=http%3a%2f%2fapmcofficial.com%2fimages%2fAPMC+Logo.png&ehk=MhgPkUHAtaCOxpPVy2TFjvB0YvoXI82WvCCtHzdzmak%3d&risl=&pid=ImgRaw&r=0">
          </q-avatar>
          AMAI PAKPAK MEDICAL CENTER
        </q-toolbar-title>

        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
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
          <div>Copyright © 2023 All Rights Reserved.</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>