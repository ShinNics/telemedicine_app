<script setup>
import { ref, watch } from "vue";
import AddEditDialog from "pages/patients/AddEditDialog.vue";


const dialog = ref(false);
const selectedPatient = ref({});

watch(dialog, (value) => {
  if (!value) {
    selectedPatient.value = {};
  }
});
</script>

<template>
  <q-page padding>
    <q-card flat bordered>
      <q-toolbar flat>
        <q-toolbar-title> Patients </q-toolbar-title>

        <q-btn
          flat
          round
          dense
          icon="add"
          color="primary"
          @click="dialog = true"
        />
      </q-toolbar>
      <q-separator />
    </q-card>

    <AddEditDialog
      v-model="dialog"
      v-model:selected-patient="selectedPatient"
    />
  </q-page>
</template>
<!-- <template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/apmc_logo.png"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script> -->
