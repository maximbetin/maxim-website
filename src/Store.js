import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const username = "maximbetin";

export default new Vuex.Store({
  state: {
    repository_info: [],
    loading: true
  },
  mutations: {
    setRepositories(state, payload) {
      state.repository_info = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    async getRepositories({ commit }) {
      var data = [];
      try {
        const get_repos_options = {
          params: { sort: "updated" }
        };
        const res = await axios.get(
          `https://api.github.com/users/${username}/repos`,
          get_repos_options
        );

        //Get non-forked first
        for (var repo of res.data) {
          var repo_name = repo.name;

          //If not a forked repo
          if (repo_name.indexOf("maxim-") >= 0) {
            const languages_res = await axios.get(repo.url + "/languages");
            var updated_at = repo.updated_at.split("T")[0];

            data.push({
              name: repo_name,
              link: repo.html_url,
              stars: repo.stargazers_count,
              description: repo.description,
              updated_at: updated_at,
              languages: languages_res.data,
              fork: repo.fork
            });
          }
        }

        //Push forked (I know, code redundancy)
        for (var repo of res.data) {
          var repo_name = repo.name;

          //If a forked repo
          if (repo_name.indexOf("maxim-") === -1) {
            const languages_res = await axios.get(repo.url + "/languages");
            var updated_at = repo.updated_at.split("T")[0];

            data.push({
              name: repo_name,
              link: repo.html_url,
              stars: repo.stargazers_count,
              description: repo.description,
              updated_at: updated_at,
              languages: languages_res.data,
              fork: repo.fork
            });
          }
        }

        commit("setRepositories", data);
        commit("setLoading", false);
      } catch (err) {
        commit("setRepositories", []);
      }
    }
  }
});
