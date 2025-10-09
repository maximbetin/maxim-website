<template>
  <v-footer class="app-footer" color="surface">
    <v-container class="py-6">
      <v-row align="center" justify="center" class="text-center">
        <v-col cols="12">
          <p class="mb-2">&copy; {{ currentYear }} Maxim Betin. All rights reserved.</p>
        </v-col>
        <v-col cols="12">
          <v-btn v-for="link in socialLinks" :key="link.href" :href="link.href" target="_blank" rel="noopener"
            variant="text" size="large" class="mx-2">
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
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
