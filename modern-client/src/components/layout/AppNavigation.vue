<script setup>
import { computed, ref, watch } from "vue";
import { useDisplay } from "vuetify";

const drawer = ref(false);
const display = useDisplay();

const menuItems = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Career", target: "career" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

const isMobile = computed(() => display.smAndDown.value);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

watch(
  () => isMobile.value,
  value => {
    if (!value) {
      drawer.value = false;
    }
  }
);

const scrollToSection = target => {
  const element = document.getElementById(target);
  if (!element) {
    return;
  }

  const headerOffset = 72;
  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
};

const handleNavigate = target => {
  scrollToSection(target);
  if (isMobile.value) {
    drawer.value = false;
  }
};
</script>

<template>
  <header>
    <v-app-bar elevation="2" class="app-navigation" color="surface">
      <v-app-bar-nav-icon class="d-lg-none" @click="toggleDrawer" />
      <v-toolbar-title class="font-weight-bold">Maxim Betin</v-toolbar-title>
      <v-spacer />
      <nav class="d-none d-lg-flex">
        <v-btn
          v-for="item in menuItems"
          :key="item.target"
          variant="text"
          class="text-button text-uppercase"
          @click="handleNavigate(item.target)"
        >
          {{ item.label }}
        </v-btn>
      </nav>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      class="d-lg-none"
      location="left"
      temporary
      width="280"
    >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.target"
          @click="handleNavigate(item.target)"
        >
          <v-list-item-title class="text-uppercase">
            {{ item.label }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<style scoped>
.app-navigation {
  backdrop-filter: blur(8px);
}

.text-button {
  font-weight: 600;
  letter-spacing: 0.08em;
}
</style>
