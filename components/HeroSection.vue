<template>
  <v-container>
    <div class="w-100 d-flex justify-center flex-wrap my-10">
      <Meteors />
      <strong class="text-sm-h4 text-md-h1 text-center my-8 text-primary">
        Where's My Money?
      </strong>
      <span class="text-sm-h5 text-md-h2  text-center my-8">
        Find out where your notes have been around the world.
      </span>
      <span class="text-sm-h6 text-md-h4  text-center my-8">
        Tracking a total of €{{ totalAmount }}
      </span>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const totalAmount = ref(20);
</script>