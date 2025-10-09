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
  `As a Computer Engineering graduate from the University of Alicante and the esteemed ARA (Alto Rendimiento Académico) group, I bring a global perspective to my work, having lived most of my life in Spain and completed my International Baccalaureate in Sweden (English-taught program). With fluency in both Spanish and English, I navigate multicultural environments with ease.`,
  `Analytical and observant by nature, I prioritize in-depth evaluation and systematic consideration before reaching crucial decisions. This approach equips me to maintain an objective stance, keep my thoughts well-ordered, and avoid impulsive actions. My curiosity extends to details, driving me to continually learn from domains including IT, history, culture, economics, and beyond.`,
  `An advocate for contributing to society, I derive immense fulfillment from helping others. It's heartening to see the impact I can make simply by lending an understanding ear and offering feasible solutions based on my experiences. This was vividly demonstrated during my university days when I developed a software solution to combat school bullying for my thesis.`,
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

.prose p + p {
  margin-top: 1rem;
}
</style>
