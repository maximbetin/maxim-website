<script setup>
import { useGithubStore } from "@/stores/github";
import { computed, onMounted } from "vue";

const githubStore = useGithubStore();

onMounted(() => {
  githubStore.fetchRepositories();
});

const repositories = computed(() => githubStore.repositories);
const loading = computed(() => githubStore.loading);
const error = computed(() => githubStore.error);
</script>

<template>
  <section id="projects" class="projects-section">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h4 text-md-h3 font-weight-bold mb-2">Projects</h2>
          <p class="text-body-1 text-medium-emphasis">
            Selected open-source work from my GitHub portfolio.
          </p>
          <v-divider class="mx-auto mt-6" style="max-width: 240px" />
        </v-col>
      </v-row>

      <v-row class="justify-center mb-8" v-if="loading">
        <v-col cols="12" md="6">
          <v-alert type="info" variant="tonal" border="start">
            Fetching data from GitHub...
          </v-alert>
          <v-progress-linear class="mt-4" indeterminate color="primary" />
        </v-col>
      </v-row>

      <v-row class="justify-center mb-8" v-else-if="error">
        <v-col cols="12" md="6">
          <v-alert type="error" variant="tonal" border="start">
            {{ error }}
          </v-alert>
        </v-col>
      </v-row>

      <v-row class="g-6" v-else>
        <v-col v-for="repo in repositories" :key="repo.id" cols="12" md="6" lg="4">
          <v-card elevation="3" class="h-100 d-flex flex-column">
            <v-card-item>
              <div class="d-flex align-center mb-2">
                <v-icon icon="mdi-github" class="me-2" />
                <span class="text-h6 font-weight-semibold">{{ repo.name }}</span>
              </div>
              <p class="text-body-2 text-medium-emphasis">
                {{ repo.description || "No description provided." }}
              </p>
            </v-card-item>

            <v-card-subtitle class="px-4">
              Last updated: {{ repo.updatedAt }}
            </v-card-subtitle>

            <v-card-text class="flex-grow-1">
              <div class="d-flex flex-wrap gap-2">
                <v-chip v-for="language in repo.languages" :key="language" color="primary" variant="elevated"
                  class="ma-1" size="small">
                  {{ language }}
                </v-chip>
              </div>
            </v-card-text>

            <v-divider class="mx-4" />

            <v-card-actions class="justify-space-between">
              <div class="d-flex align-center">
                <v-icon icon="mdi-star-outline" class="me-1" />
                <span>{{ repo.stars }}</span>
                <v-chip v-if="repo.isFork" class="ms-4" size="small" variant="tonal">
                  <v-icon icon="mdi-source-fork" start />
                  Forked
                </v-chip>
              </div>
              <v-btn color="secondary" variant="flat" :href="repo.htmlUrl" target="_blank" rel="noopener">
                View on GitHub
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.projects-section {
  background-color: #f5f7fa;
}
</style>
