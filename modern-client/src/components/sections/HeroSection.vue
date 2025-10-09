<script setup>
const actions = [
  {
    label: "LinkedIn",
    icon: "mdi-linkedin",
    href: "https://www.linkedin.com/in/maxim-betin",
  },
  {
    label: "Stack Overflow",
    icon: "mdi-stack-overflow",
    href: "https://stackoverflow.com/users/9146820/maxim",
  },
  {
    label: "GitHub",
    icon: "mdi-github",
    href: "https://github.com/maximbetin",
  },
  {
    label: "Resume",
    icon: "mdi-file-account",
    href:
      "https://storage.googleapis.com/phonic-network-281616.appspot.com/Maxim%20Betin%20-%20Resume%20(English).pdf",
  },
];

const openLink = href => {
  window.open(href, "_blank", "noopener");
};
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
              <v-btn
                v-for="action in actions"
                :key="action.href"
                class="ma-2"
                color="primary"
                variant="flat"
                size="large"
                @click="openLink(action.href)"
              >
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
