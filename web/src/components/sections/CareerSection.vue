<script setup>
const futureProspects = [
  `DevOps pulled me in because it mixes the mechanics of resilient systems with the people side of shipping software. There is always a new puzzle, yet the work stays grounded in helping teammates move faster with less stress.`,
  `Most days you’ll find me pairing with engineers, coaxing pipelines into shape, or iterating on the platform roadmap with product leads. Practical hands-on work keeps me sharp, and I enjoy translating deep technical detail into clear direction for stakeholders.`,
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

const experienceSnapshots = [
  {
    company: "Flowable",
    summary:
      "Designed an automation framework on AKS that parsed Jira queues, triggered onboarding workflows, and kept Workday integrations, runbooks, and monitoring in sync.",
    tags: ["Automation", "AKS", "Python", "Argo CD"],
  },
  {
    company: "WebHelp",
    summary:
      "Supported global customers on GCP PaaS, balancing incident response with forensic root-cause investigations across App Engine, Cloud Spanner, BigQuery, and Cloud Run.",
    tags: ["GCP", "Incident response", "Performance", "Client advisory"],
  },
  {
    company: "Planeta Huerto",
    summary:
      "Stabilised an undocumented e-commerce stack by rebuilding GKE clusters, hardening access, automating Bitbucket pipelines, and standing up observability with Prometheus and Grafana.",
    tags: ["Kubernetes", "Security", "CI/CD", "Observability"],
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

      <v-row class="g-6 mt-4">
        <v-col cols="12">
          <h3 class="text-h6 text-uppercase font-weight-medium mb-4 text-center text-md-left">Recent snapshots</h3>
        </v-col>
        <v-col v-for="snapshot in experienceSnapshots" :key="snapshot.company" cols="12" md="4">
          <v-card class="experience-card pa-6 h-100">
            <div class="d-flex align-center mb-3">
              <v-icon icon="mdi-briefcase-outline" class="me-2" color="primary" />
              <span class="text-subtitle-1 font-weight-semibold">{{ snapshot.company }}</span>
            </div>
            <p class="text-body-2 text-medium-emphasis mb-4">
              {{ snapshot.summary }}
            </p>
            <div class="d-flex flex-wrap gap-2">
              <v-chip v-for="tag in snapshot.tags" :key="tag" color="secondary" size="small" variant="tonal">
                {{ tag }}
              </v-chip>
            </div>
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

.experience-card {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  background-color: var(--color-surface);
  border: 1px solid rgba(44, 62, 145, 0.08);
}
</style>
