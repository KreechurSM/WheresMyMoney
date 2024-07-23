<template>
  <!-- top half -> Map showing location etc -->
  <!-- bottom half split in 2 table showing recent listed recordings & Top countries where the note was -->
  <v-container>
    <v-row>
      <v-col>
        <div style="width: 100%; height: 500px;">
          <LMap ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]" :use-global-leaflet="false">
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
              name="OpenStreetMap" />
          </LMap>
        </div>
      </v-col>
    </v-row>
    <v-row cols="12">
      <v-col>
        <span>Top Countries</span>
        <v-table class="mx-4">
          <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Hits
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in topCountries" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.hits }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col>
        <span>Recent Recordings</span>
        <v-table class="mx-4">
          <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Hits
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in recentHits" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.hits }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const zoom = ref(2);

const topCountries = [
  {
    name: 'Ireland',
    hits: 159,
  },
  {
    name: 'Spain',
    hits: 237,
  },
  {
    name: 'Portugal',
    hits: 262,
  },
  {
    name: 'Poland',
    hits: 305,
  },
  {
    name: 'Germany',
    hits: 356,
  }
]

const recentHits = [
  {
    name: 'Ireland',
    hits: 159,
  },
  {
    name: 'Spain',
    hits: 237,
  },
  {
    name: 'Portugal',
    hits: 262,
  },
  {
    name: 'Poland',
    hits: 305,
  },
  {
    name: 'Germany',
    hits: 356,
  }
]

</script>