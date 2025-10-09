<script setup>
const futureProspects = [
  `A few years ago I discovered DevOps—a discipline that blends my passion for helping others with the thrill of continuous learning. The field’s breadth keeps work engaging while balancing deep technical problem-solving with empathetic collaboration.`,
  `Kubernetes quickly became a focus area; I invest heavily in honing practical skills through real workloads and guided experiments. I value hands-on mastery over certificates, though I’m certified as a Google Cloud Associate Cloud Engineer (ACE) and continue pursuing pragmatic expertise.`,
  `I’m energized by environments that value psychological safety, craftsmanship, and measurable impact. My goal is to partner with teams that deliver resilient platforms, improve operational excellence, and grow together through transparency and trust.`,
];

const highlights = [
  {
    title: "Automation & Reliability",
    description:
      "I build observability-rich platforms, automate repetitive workflows, and champion operational readiness through documentation and runbooks.",
    icon: "mdi-robot",
  },
  {
    title: "Platform Ownership",
    description:
      "From Kubernetes administration to CI/CD governance, I enjoy designing infrastructure foundations that empower product teams without slowing delivery.",
    icon: "mdi-cloud-check",
  },
  {
    title: "Team Enablement",
    description:
      "Mentorship, process facilitation, and incident leadership are core strengths. I strive to make complex systems approachable for everyone involved.",
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
