<template>
  <v-footer class="app-footer" color="surface">
    <v-container class="py-8">
      <v-row align="center" justify="space-between" class="flex-column flex-md-row text-center text-md-left">
        <v-col cols="12" md="6">
          <p class="mb-1 text-subtitle-1 font-weight-medium">Working on calm, reliable platforms.</p>
          <p class="text-body-2 text-medium-emphasis mb-0">&copy; {{ currentYear }} Maxim Betin · Built with Vue 3, Vuetify, and plenty of coffee.</p>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center justify-md-end mt-4 mt-md-0">
          <v-btn v-for="link in socialLinks" :key="link.href" :href="link.href" target="_blank" rel="noopener"
            variant="flat" class="mx-2" color="primary">
            <v-icon :icon="link.icon" />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { FOOTER_LINKS } from "@/data/profile";

const currentYear = new Date().getFullYear();
const socialLinks = FOOTER_LINKS;
</script>

<style scoped>
.app-footer {
  border-top: 1px solid rgba(44, 62, 145, 0.08);
  box-shadow: 0 -12px 32px rgba(31, 43, 104, 0.05);
}
</style>
