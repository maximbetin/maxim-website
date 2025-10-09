<script setup>
import { computed } from "vue";

const paragraphs = computed(() => [
  `Computer engineering studies at the University of Alicante, time in the ARA honors cohort, and years living in Sweden shaped an easy switch between Spanish- and English-speaking environments. That mix of cultures is still at the core of how work gets done with global teams today.`,
  `Problem solving starts with listening, collecting context, and designing a path that people can actually follow. Curiosity stretches beyond infrastructure—history, economics, and culture often spark the ideas that keep platforms reliable yet flexible.`,
  `Sharing what works matters. A thesis project focused on reducing school bullying turned into a lasting habit of mentoring, writing playbooks, and unblocking teammates so the whole group keeps moving forward together.`,
]);
</script>

<template>
  <section id="about" class="about-section">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12">
          <div class="text-center mb-10">
            <h2 class="text-h4 text-md-h3 font-weight-bold mb-2">About me</h2>
            <v-divider class="mx-auto" style="max-width: 200px" />
          </div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="9" lg="8">
          <div class="prose mx-auto">
            <p v-for="paragraph in paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.about-section {
  background-color: var(--v-theme-surface);
}

.prose {
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(28, 35, 51, 0.84);
}

.prose p+p {
  margin-top: 1rem;
}
</style>
