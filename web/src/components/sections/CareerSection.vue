<script setup>
const futureProspects = [
  `DevOps pulled me in because it mixes the mechanics of resilient systems with the people side of shipping software. There is always a new puzzle, yet the work stays grounded in helping teammates move faster with less stress.`,
  `Most days you’ll find me fine-tuning Kubernetes workloads, improving pipelines, or exploring cloud platform updates. The Google Cloud Associate Cloud Engineer certification stays current because I prefer practical knowledge to stay sharp.`,
  `The teams I gravitate toward value openness over heroics. Shared responsibility, steady delivery, and a healthy incident culture are the ingredients for platforms that are both dependable and calm to operate.`,
];

const highlights = [
  {
    title: "Automation & Reliability",
    description:
      "Automating the boring, tightening feedback loops, and keeping runbooks fresh so incidents never feel chaotic.",
    icon: "mdi-robot",
  },
  {
    title: "Platform Ownership",
    description:
      "Pairing Kubernetes, CI/CD, and documentation to create infrastructure that product squads trust instinctively.",
    icon: "mdi-cloud-check",
  },
  {
    title: "Team Enablement",
    description:
      "Mentoring engineers, guiding incidents with a steady tone, and breaking complex systems into approachable steps.",
    icon: "mdi-account-group",
  },
];
</script>

<template>
  <section id="career" class="career-section">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h4 text-md-h3 font-weight-bold mb-2">Career</h2>
          <p class="text-body-1 text-medium-emphasis">
            Mapping future impact with DevOps, reliability, and people-first leadership.
          </p>
          <v-divider class="mx-auto mt-6" style="max-width: 240px" />
        </v-col>
      </v-row>

      <v-row class="g-8">
        <v-col cols="12" md="7">
          <v-card elevation="2" class="pa-6">
            <h3 class="text-h6 text-uppercase font-weight-medium mb-4">Future prospects</h3>
            <div class="prose">
              <p v-for="paragraph in futureProspects" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="5">
          <v-card elevation="1" class="py-6 px-4">
            <v-list lines="two" density="comfortable">
              <v-list-item v-for="highlight in highlights" :key="highlight.title" :prepend-icon="highlight.icon">
                <v-list-item-title class="text-subtitle-1 font-weight-semibold">
                  {{ highlight.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ highlight.description }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.career-section {
  background-color: var(--v-theme-surface);
}

.prose p+p {
  margin-top: 1rem;
}
</style>
