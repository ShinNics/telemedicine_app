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