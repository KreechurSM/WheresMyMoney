<template>
  <div>
    <v-btn variant="flat" @click="getLocation">Get Current Location</v-btn>
    <span v-if="location?.latitude">Latitude: {{ location?.latitude }}</span>
    <span v-if="location?.longitude"> Longitude: {{ location?.longitude }}</span>
  </div>
  <v-snackbar v-model="showSnackbar" :color="snackbarColor" :timeout="2000">
    <span>{{ snackbarMessage }}</span>
  </v-snackbar>
</template>

<script setup>
import { ref } from 'vue';

const location = ref(null);
const error = ref(null);

const showSnackbar = ref(false);
const snackbarColor = ref("success");
const snackbarMessage = ref("");
const snackbarColors = {
  success: "success",
  error: "error"
}
const snackbarMessages = {
  success: "Location Retrieved Successfully",
  error: "Geolocation is not supported by this browser."
}

const renderSnackbar = (message, color) => {
  snackbarColor.value = color;
  snackbarMessage.value = message;
  showSnackbar.value = true;
}

const getLocation = async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setLocation, showError);
    renderSnackbar(snackbarMessages.success, snackbarColors.success);
  } else {
    error.value = " Geolocation is not supported by this browser.";
    renderSnackbar(snackbarMessages.error, snackbarColors.error);
  }
};
const setLocation = async (position) => {
  const { latitude, longitude } = position.coords;
  location.value = { latitude, longitude };
  error.value = null;
  console.dir(location.value);
};

const showError = (err) => {
  const errorMessages = {
    [err.PERMISSION_DENIED]: "User denied the request for Geolocation.",
    [err.POSITION_UNAVAILABLE]: "Location information is unavailable.",
    [err.TIMEOUT]: "The request to get user location timed out.",
    [err.UNKNOWN_ERROR]: "An unknown error occurred.",
  };
  error.value = errorMessages[err.code] || "An unknown error occurred.";
};
</script>

<style scoped></style>
