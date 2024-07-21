<template>
  <section id="Landing" class="d-flex w-100 flex-column">
    <section id="hero" data-aos="zoom-out" class="d-flex w-100 align-center" style="height: 75vh">
      <HeroSection></HeroSection>
    </section>
    <v-container data-aos="zoom-out">
      <div class="d-flex w-100 justify-center my-4"><span class="text-h4 text-center">Find out where your euro notes
          have
          been</span>
      </div>
      <ClientOnly>

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
      </ClientOnly>
    </v-container>

    <faq-section data-aos="fade-up"></faq-section>
  </section>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';
import { useNotesStore } from '~/stores/notes';

const noteStore = useNotesStore();

const serialNumber = ref('');

const SearchNoteSerial = async () => {
  // Check if the note exists or not
  const response = await noteStore.checkNoteSerial(serialNumber.value);
  console.dir(response.value);
}

onMounted(() => {
  AOS.init();
})
</script>