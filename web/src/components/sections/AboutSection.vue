<script setup>
import { computed } from "vue";
import VueApexCharts from "vue3-apexcharts";

const chartOptions = {
  chart: {
    type: "pie",
    toolbar: { show: false },
  },
  theme: {
    monochrome: {
      enabled: true,
      color: "#607D8B",
      shadeIntensity: 0.3,
    },
  },
  legend: {
    position: "bottom",
  },
  labels: [
    "IT Nerdiness",
    "Friends",
    "Swimming",
    "Hiking",
    "Reading",
    "TV Shows",
    "Jogging",
    "Mountain Climbing",
    "Boxing",
    "Mindfulness",
  ],
  dataLabels: {
    formatter(value, { w, seriesIndex }) {
      const label = w.globals.labels[seriesIndex];
      return `${label}: ${value.toFixed(1)}%`;
    },
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        legend: { show: false },
      },
    },
  ],
};

const series = [26, 23, 15, 10, 9, 8, 3, 2, 2, 2];

const paragraphs = computed(() => [
  `I studied Computer Engineering at the University of Alicante as part of the ARA program and spent several years in Sweden completing the International Baccalaureate. Speaking both Spanish and English lets me work comfortably with teams in different places.`,
  `I take time to understand a problem before making decisions and look for clear, practical answers. Outside of work I stay curious about technology, history, culture, and economics because fresh context helps me build better solutions.`,
  `Helping others is a big motivator for me. During university I built my thesis project to tackle school bullying, and I still enjoy sharing what I learn so other people can move faster.`,
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

      <v-row class="g-8">
        <v-col cols="12" md="7">
          <div class="prose">
            <p v-for="paragraph in paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <v-card class="pa-4" elevation="2">
            <VueApexCharts type="pie" height="320" :options="chartOptions" :series="series" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.about-section {
  background-color: var(--v-theme-surface);
}

.prose p+p {
  margin-top: 1rem;
}
</style>
