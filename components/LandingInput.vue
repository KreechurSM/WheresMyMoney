<template>
  <v-container class="d-flex justify-center">
    <v-sheet id="input-sheet" :width="600" :height="400" :elevation="1" border="md" rounded="lg" class="pa-8">
      <div class="d-flex w-100 justify-center my-4">
        <span class="text-h4 text-center">
          Find out where your euro notes have been!
        </span>
      </div>
      <ClientOnly>
        <div class="d-flex w-100 flex-wrap justify-center">
          <div class="my-2">
            <LocationButton></LocationButton>
          </div>
          <div class="d-flex w-100 my-2 px-8">
            <v-text-field class="w-75" clearable label="Enter the euro note serial" placeholder="Serial Number"
              color="primary" variant="solo" v-model="serialNumber">
              <template v-slot:prepend-inner>
                <v-icon color="primary">mdi-currency-eur</v-icon>
              </template>
              <template v-slot:append-inner>
                <v-btn icon="mdi-magnify" variant="text" color="primary" @click="SearchNoteSerial">
                </v-btn>
              </template>
            </v-text-field>
          </div>
          <div class="my-2">
            <v-btn variant="tonal" color="primary">Submit</v-btn>
          </div>
        </div>
      </ClientOnly>
    </v-sheet>
  </v-container>
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

<style>
#input-sheet:hover {
  filter: drop-shadow(0px 0px 6px #883eff);
  transition: 1s;
}

#input-sheet {
  filter: drop-shadow(0px 0px 0px #883eff);
  transition: 1s;
}
</style>