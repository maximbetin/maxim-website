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
            <v-img src="@/assets/photo.jpg" alt="Portrait of Maxim Betin Khvalenskiy" />
          </v-avatar>
        </v-col>
        <v-col cols="12" md="6">
          <div class="text-md-left text-center">
            <p class="text-subtitle-1 text-uppercase font-weight-medium mb-2">
              Platform engineering & DevOps partner
            </p>
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">Maxim Betin Khvalenskiy</h1>
            <p class="text-body-1 text-medium-emphasis mb-8">
              Engineering leader who pairs calm delivery with curiosity. Partnering with teams to grow resilient
              platforms, trim operational friction, and ship customer value without drama.
            </p>
            <div class="d-flex flex-wrap justify-center justify-md-start">
              <v-btn v-for="action in actions" :key="action.key"
                :class="['ma-2', action.tone === 'accent' ? 'cta-button-alt' : 'cta-button']" color="primary"
                variant="flat" size="large" :href="action.href" target="_blank" rel="noopener">
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
  background: linear-gradient(135deg, #f7f9ff 0%, #e5f1ff 100%);
}
</style>
