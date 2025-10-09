<script setup>
const skillGroups = [
  {
    title: "Platform foundations",
    blurb: "Keeping clusters, pipelines, and infrastructure-as-code tidy so product teams can launch without wrestling the plumbing.",
    skills: [
      { name: "Python", level: 85 },
      { name: "PowerShell", level: 75 },
      { name: "CI/CD", level: 75 },
      { name: "Infrastructure as Code", level: 70 },
    ],
  },
  {
    title: "Observability & operations",
    blurb: "Designing signals that matter, closing feedback loops quickly, and guiding calm on-call rotations.",
    skills: [
      { name: "Kubernetes", level: 70 },
      { name: "Docker", level: 70 },
      { name: "Prometheus", level: 75 },
      { name: "Grafana", level: 70 },
    ],
  },
  {
    title: "Cloud partnerships",
    blurb: "Helping teams navigate Google Cloud and Azure, balancing managed services with just enough customization.",
    skills: [
      { name: "Google Cloud Platform", level: 70 },
      { name: "Azure", level: 60 },
      { name: "Linux", level: 65 },
      { name: "Networking", level: 55 },
    ],
  },
];
</script>

<template>
  <section id="skills" class="skills-section">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h4 text-md-h3 font-weight-bold mb-2">Skills</h2>
          <v-divider class="mx-auto" style="max-width: 200px" />
        </v-col>
      </v-row>

      <v-row class="g-8">
        <v-col v-for="group in skillGroups" :key="group.title" cols="12" md="4">
          <v-card class="skill-card pa-6 h-100">
            <h3 class="text-h6 font-weight-medium mb-3 text-uppercase">
              {{ group.title }}
            </h3>
            <p class="text-body-2 text-medium-emphasis mb-6">
              {{ group.blurb }}
            </p>
            <div class="skill-stack">
              <div v-for="skill in group.skills" :key="skill.name" class="mb-4">
                <div class="d-flex justify-space-between text-caption text-uppercase mb-2 text-medium-emphasis">
                  <span class="font-weight-semibold">{{ skill.name }}</span>
                  <span>{{ skill.level }}%</span>
                </div>
                <v-progress-linear :model-value="skill.level" color="secondary" height="10" rounded />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.skills-section {
  background-color: rgba(44, 62, 145, 0.04);
}

.skill-stack {
  display: flex;
  flex-direction: column;
}

.skill-card {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  background-color: var(--color-surface);
}
</style>
