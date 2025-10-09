<script setup>
import { HERO_ACTIONS } from "@/data/profile";

const actions = HERO_ACTIONS;
</script>

<template>
  <section id="hero" class="hero-section">
    <v-container class="py-16">
      <v-row align="center" justify="center" class="g-12">
        <v-col cols="12" md="4" class="text-center">
          <v-avatar size="180" class="elevation-4">
            <v-img src="@/assets/photo.jpg" alt="Portrait of Maxim Betin" />
          </v-avatar>
        </v-col>
        <v-col cols="12" md="6">
          <div class="text-md-left text-center">
            <p class="text-subtitle-1 text-uppercase font-weight-medium mb-2">
              Engineering Leader · DevOps Specialist
            </p>
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">Maxim Betin</h1>
            <p class="text-body-1 text-medium-emphasis mb-8">
              Analytical engineering leader focused on automation, reliability, and
              people-centric collaboration. I design resilient platforms, nurture
              healthy teams, and ship outcomes that matter.
            </p>
            <div class="d-flex flex-wrap justify-center justify-md-start">
              <v-btn v-for="action in actions" :key="action.key" class="ma-2" color="primary" variant="flat"
                size="large" :href="action.href" target="_blank" rel="noopener">
                <v-icon :icon="action.icon" start />
                {{ action.label }}
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #d7e3fc 100%);
}
</style>
