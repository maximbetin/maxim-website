<template>
  <div>
    <v-app-bar app clipped-left elevate-on-scroll color="#B0BEC5">
      <v-spacer></v-spacer>

      <v-app-bar-items class="menu-button">
        <v-btn
          text
          class="menu-button hidden-sm-and-down"
          @click="$vuetify.goTo(item.link, '')"
          v-for="item in menu"
          :key="item.icon"
          >{{ item.title }}
        </v-btn>

        <div class="hidden-md-and-up">
          <v-menu class="menu-dropdown">
            <template v-slot:activator="{ on }">
              <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
            </template>

            <v-list class="menu-dropdown">
              <v-list-item
                v-for="item in menu"
                @click="$vuetify.goTo(item.link, '')"
                class="menu-dropdown"
                :key="item.id"
              >
                <v-list-item-title class="menu-dropdown">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <v-spacer></v-spacer>
      </v-app-bar-items>
    </v-app-bar>

    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      fixed
      bottom
      right
      color="#78909C"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      appTitle: "Maxim Betin",

      fab: false,
      menu: [
        { icon: "about", title: "ABOUT", link: "#about" },
        { icon: "skills", title: "SKILLS", link: "#skills" },
        { icon: "career", title: "CAREER", link: "#career" },
        { icon: "projects", title: "PROJECTS", link: "#projects" },
        { icon: "contact", title: "CONTACT", link: "#contact" }
      ]
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    menuItems() {
      return this.menu;
    }
  }
};
</script>

<style scoped>
.menu-button {
  height: 100% !important;
  font-weight: bold;
  color: white;
}

.menu-dropdown {
  background-color: rgb(176, 190, 197);
  color: white;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
}

.menu-dropdown:hover {
  color: rgb(69, 90, 100);
}

.menu-button:hover {
  color: rgb(69, 90, 100);
}
</style>
