<script setup>
const futureProspects = [
  `I chose DevOps because it mixes my two favourite things: building reliable systems and helping people work better together. The variety keeps me learning without losing sight of day-to-day needs.`,
  `Kubernetes is my main toolkit. I focus on running real workloads, keeping my Google Cloud Associate Cloud Engineer certification current, and sharing what works with the teams I support.`,
  `I look for teams that value openness, steady delivery, and shared responsibility. My aim is to create platforms that are simple to run and easy to trust.`,
];

const highlights = [
  {
    title: "Automation & Reliability",
    description:
      "I automate repeatable tasks, add clear monitoring, and keep runbooks current so incidents stay manageable.",
    icon: "mdi-robot",
  },
  {
    title: "Platform Ownership",
    description:
      "I help teams ship faster by keeping Kubernetes, CI/CD, and infrastructure predictable and well-documented.",
    icon: "mdi-cloud-check",
  },
  {
    title: "Team Enablement",
    description:
      "I coach teammates, guide incidents calmly, and turn complex systems into practical steps anyone can follow.",
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
