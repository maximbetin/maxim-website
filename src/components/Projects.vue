<template>
  <v-container fluid class="background-color" id="projects">
    <v-flex class="projects-wrapper">
      <v-layout align-center column mx-15 mb-2 mt-10>
        <v-flex class="display-1 font-weight-light text-xs-center mb-1">
          Projects
        </v-flex>
      </v-layout>

      <v-divider color="gray"></v-divider>

      <br />

      <v-flex class="projects-text">
        <p class="text-center mt6">
          Most of my projects are publicly hosted on my
          <a href="https://github.com/maximbetin">GitHub page</a>. Click on each
          card to see more details and to visit the repository.
        </p>
      </v-flex>

      <v-layout align-center justify-center class="data-iterator-wrapper">
        <v-flex align-center>
          <!-- If there is still no data to display, show indeterminate progress bar-->
          <v-flex class="loading-bar-wrapper" v-if="loading">
            <p style="text-align:center">Fetching data from GitHub API...</p>
            <v-progress-linear indeterminate></v-progress-linear>
          </v-flex>

          <!-- Otherwise, fill up the data iterator with the GitHub API data -->
          <v-data-iterator
            hide-default-footer
            v-else
            :items="repos"
            :items-per-page.sync="itemsPerPage"
            loading
            :page="page"
          >
            <!--:footer-props="itemsPerPageOptions" -->

            <template v-slot:default="props">
              <v-row>
                <v-col v-for="item in props.items" cols="12" sm="6" :key="item">
                  <!--
                v-for="item in props.items"
                cols="12"
                sm="6"
                :key="item"
                md="4"
                lg="4"
                -->

                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      @click="redirect_to_url(item.link)"
                      :elevation="hover ? 12 : 2"
                      class="background-color-card"
                    >
                      <v-card-title class="justify-center" mb-2
                        ><h4>{{ item.name }}</h4></v-card-title
                      >
                      <!-- Languages icons -->
                      <v-card-text class="justify-center">
                        <span v-for="(item, key) in item.languages" :key="item">
                          <v-chip class="chip-wrapper" v-if="key == 'Python'">
                            <v-icon input-value="Python" left
                              >mdi-language-python</v-icon
                            >
                            Python
                          </v-chip>

                          <v-chip class="chip-wrapper" v-if="key == 'Java'">
                            <v-icon left>mdi-language-java</v-icon>
                            Java
                          </v-chip>

                          <v-chip
                            class="chip-wrapper"
                            v-if="key == 'Dockerfile'"
                          >
                            <v-icon left>mdi-docker</v-icon>
                            Docker
                          </v-chip>

                          <v-chip class="chip-wrapper" v-if="key == 'Shell'">
                            <v-icon left>mdi-console-line</v-icon>
                            Shell
                          </v-chip>

                          <v-chip
                            class="chip-wrapper"
                            v-if="key == 'JavaScript'"
                          >
                            <v-icon left>mdi-nodejs</v-icon>
                            JavaScript/Node.js
                          </v-chip>

                          <v-chip class="chip-wrapper" v-if="key == 'Go'">
                            <v-icon left>mdi-language-go</v-icon>
                            Go
                          </v-chip>

                          <v-chip class="chip-wrapper" v-if="key == 'Ruby'">
                            <v-icon left>mdi-language-ruby</v-icon>
                            Ruby
                          </v-chip>

                          <v-chip class="chip-wrapper" v-if="key == 'Groovy'">
                            <v-icon left
                              ><span
                                class="iconify"
                                data-icon="cib:groovy"
                                data-inline="false"
                              ></span
                            ></v-icon>
                            Groovy
                          </v-chip>
                        </span>

                        <v-chip
                          class="chip-wrapper"
                          v-if="
                            item.link ==
                              'https://github.com/maximbetin/maxim-ansible-ssh'
                          "
                        >
                          <v-icon left>mdi-ansible</v-icon>
                          Ansible
                        </v-chip>

                        <v-chip
                          class="chip-wrapper"
                          v-if="
                            item.link ==
                              'https://github.com/maximbetin/awesome-devsecops'
                          "
                        >
                          <v-icon left>mdi-language-markdown</v-icon>
                          Markdown
                        </v-chip>

                        <v-chip
                          class="chip-wrapper"
                          v-if="
                            item.link ==
                              'https://github.com/maximbetin/incident-lifecycle-model'
                          "
                        >
                          <v-icon left>mdi-language-markdown</v-icon>
                          Markdown
                        </v-chip>

                        <v-chip
                          class="chip-wrapper"
                          v-if="
                            item.link ==
                              'https://github.com/maximbetin/maxim-pipelines'
                          "
                        >
                          <v-icon left>mdi-gitlab</v-icon>
                          CI/CD
                        </v-chip>
                      </v-card-text>

                      <v-divider class="mx-4"></v-divider>

                      <v-card-text>
                        <div class="card-text">{{ item.description }}</div>
                      </v-card-text>

                      <v-divider class="mx-4"></v-divider>

                      <v-card-text>
                        <div class="card-text">
                          Last updated: {{ item.updated_at }}
                        </div>
                      </v-card-text>

                      <v-flex v-if="item.fork">
                        <v-divider class="mx-4"></v-divider>
                        <v-card-text>
                          <v-chip class="chip-wrapper">
                            <v-icon left>mdi-source-fork</v-icon>
                            Forked
                          </v-chip>
                        </v-card-text>
                      </v-flex>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </template>

            <template v-slot:footer>
              <v-row class="mt-2" align="center" justify="center">
                <span class="ml-3 grey--text">Items per page</span>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      text
                      color="#78909C"
                      class="ml-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ itemsPerPage }}
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list class="menu-dropdown">
                    <v-list-item
                      v-for="(number, index) in itemsPerPageArray"
                      :key="index"
                      @click="updateItemsPerPage(number)"
                    >
                      <v-list-item-title class="menu-button">{{
                        number
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-spacer></v-spacer>

                <span
                  class="mr-3
                  grey--text"
                >
                  Page {{ page }} of {{ numberOfPages }}
                </span>
                <v-btn fab color="#78909C" class="mr-1" @click="formerPage">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn fab class="ml-1 mr-3" color="#78909C" @click="nextPage">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<style scoped>
.projects-wrapper {
  margin-left: 15vw;
  margin-right: 15vw;
  color: black;
}

.background-color-card {
  background-color: #b0bec5;
}

.data-iterator-wrapper {
  min-height: 40vh;
}

.loading-bar-wrapper {
  max-width: 16vw;
  margin-left: calc(50% - 8vw);
}

.chip-wrapper {
  margin-left: 10px;
  margin-top: 8px !important;
  background: #78909c !important;
}

.card-text {
  color: white;
}

.projects-text {
  color: black;
  text-align: justify;
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

.menu-button:hover {
  color: black;
}
</style>
<!--<<script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>-->
<script>
/*import IconifyIcon from '@iconify/vue';
import home from '@iconify-icons/mdi/home';
import faceWithMonocle from '@iconify-icons/twemoji/face-with-monocle';*/

export default {
  name: "Projects",
  computed: {
    repos() {
      return this.$store.state.repository_info;
    },
    loading() {
      return this.$store.state.loading;
    },
    numberOfPages() {
      return Math.ceil(
        this.$store.state.repository_info.length / this.itemsPerPage
      );
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    getRepositoriesFromStore() {
      this.$store.dispatch("getRepositories");
    },
    redirect_to_url(link) {
      window.open(link, "_blank");
    }
  },
  mounted() {
    this.getRepositoriesFromStore();
  },
  data: () => ({
    //itemsPerPageOptions: [10, 20, 30],
    itemsPerPageArray: [6, 12, 24],
    itemsPerPage: 6,
    page: 1
  })
};
</script>
