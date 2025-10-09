<script setup>
import { CONTACT_LINKS } from "@/data/profile";

const contactLinks = CONTACT_LINKS;
const primaryContactLabel = contactLinks[0]?.label ?? "LinkedIn";
</script>

<template>
  <section id="contact" class="contact-section">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h4 text-md-h3 font-weight-bold mb-2">Contact</h2>
          <p class="text-body-1 text-medium-emphasis">
            Reach out via my preferred social channels.
          </p>
          <v-divider class="mx-auto mt-6" style="max-width: 240px" />
        </v-col>
      </v-row>

      <v-row justify="center" class="mb-10 g-6">
        <v-col v-for="link in contactLinks" :key="link.key" cols="6" md="3" class="d-flex justify-center">
          <v-btn class="contact-button" size="large" color="primary" variant="flat" :href="link.href" target="_blank"
            rel="noopener">
            <v-icon :icon="link.icon" start />
            {{ link.label }}
          </v-btn>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="6" class="text-center">
          <p class="text-body-1">
            The fastest way to reach me is through {{ primaryContactLabel }}.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: var(--v-theme-surface);
}

.contact-button {
  min-width: 180px;
}
</style>
