<template>
  <section class="d-flex w-100 my-8">
    <v-container>
      <div class="my-8">
        <div class="d-flex w-100 justify-center">
          <p class="text-h4">Frequently Asked Questions</p>
        </div>
        <div class="d-flex w-100 justify-center">
          <p class="text-caption">If you can't find the answer you're looking for, our team is here to
            assist you. Feel free to reach out for assistance.
          </p>
        </div>
      </div>
      <ClientOnly>
        <v-expansion-panels variant="accordion">
          <v-expansion-panel v-for="i in faqItems" :key="i" :text="i.text" :title="i.title"></v-expansion-panel>
        </v-expansion-panels>
      </ClientOnly>
    </v-container>
  </section>
</template>

<script setup>
const faqItems = [
  {
    title: "What is WheresMyMoney?",
    text: "Lorem"
  },
  {
    title: "How Do I Track a New Note?",
    text: "Lorem"
  },
  {
    title: "What benefits do i get with an account",
    text: "Lorem"
  }
]
</script>