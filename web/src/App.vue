<script setup>
import { RouterView } from "vue-router";

import AppFooter from "@/components/layout/AppFooter.vue";
import AppNavigation from "@/components/layout/AppNavigation.vue";
</script>

<template>
  <v-app>
    <AppNavigation />
    <v-main class="bg-surface">
      <RouterView />
    </v-main>
    <AppFooter />
  </v-app>
</template>
