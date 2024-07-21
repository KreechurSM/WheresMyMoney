<template>
  <section id="Landing" class="d-flex w-100 flex-column">
    <v-container>
      <div class="d-flex w-100 justify-center my-4"><span class="text-h4 text-center">Find out where your euro notes
          have
          been</span>
      </div>
      <v-text-field clearable label="Enter the euro note serial" placeholder="Serial Number" color="primary"
        variant="solo" v-model="serialNumber">
        <template v-slot:prepend>
          <v-icon color="primary">mdi-currency-eur</v-icon>
        </template>
        <template v-slot:append>
          <v-btn icon="mdi-magnify" variant="text" color="primary" @click="SearchNoteSerial">
          </v-btn>
        </template>
      </v-text-field>
    </v-container>

    <faq-section></faq-section>
  </section>
</template>

<script setup>
import { useNotesStore } from '~/stores/notes';

const noteStore = useNotesStore();

const serialNumber = ref('');

const SearchNoteSerial = async () => {
  // Check if the note exists or not
  const response = await noteStore.checkNoteSerial(serialNumber.value);
  console.dir(response.value);
}
</script>