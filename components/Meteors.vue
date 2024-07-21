<template>
  <div class="meteors-container">
    <client-only>
      <span v-for="(meteor, idx) in meteors" :key="idx" :class="['meteor', 'animate-meteor-effect']"
        :style="getMeteorStyle()"></span>
    </client-only>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  number: {
    type: Number,
    default: 20
  }
});

const meteors = ref([...new Array(props.number).fill(true)]);

const getMeteorStyle = () => ({
  top: '0',
  left: `${Math.floor(Math.random() * 100)}vw`,
  animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
  animationDuration: `${Math.floor(Math.random() * (10 - 2) + 4)}s`
});
</script>

<style scoped>
.meteor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.meteor {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 3px;
  width: 3px;
  border-radius: 9999px;
  background-color: #0c71ff;
  -moz-box-shadow: 0 0 5px 5px #666;
  -webkit-box-shadow: 0 0 4px 4px #666;
  box-shadow: 0 0 4px 4px rgba(255, 0, 0, 0.1);
  transform: rotate(215deg);
}

.meteor::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 75px;
  height: 1px;
  background: linear-gradient(90deg, #89baff, transparent);
}

.animate-meteor-effect {
  animation: meteor 5s linear infinite;
}

@keyframes meteor {
  0% {
    transform: rotate(215deg) translateX(0);
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    transform: rotate(215deg) translateX(-500px);
    opacity: 0;
  }
}
</style>
