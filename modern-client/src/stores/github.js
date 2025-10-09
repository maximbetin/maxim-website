import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const LANGUAGES_TO_DISPLAY = 3;
const MAX_PROJECTS = 12;

const formatDate = isoString => {
  try {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formatter.format(new Date(isoString));
  } catch (error) {
    return isoString;
  }
};

export const useGithubStore = defineStore("github", () => {
  const repositories = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchRepositories = async () => {
    if (repositories.value.length || loading.value) {
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      const { data } = await axios.get(
        "https://api.github.com/users/maximbetin/repos",
        {
          params: {
            sort: "updated",
            per_page: 100,
          },
          headers: {
            Accept: "application/vnd.github+json",
          },
        }
      );

      const ordered = [
        ...data.filter(repo => !repo.fork),
        ...data.filter(repo => repo.fork),
      ];

      const selected = ordered.slice(0, MAX_PROJECTS);

      const languageResponses = await Promise.allSettled(
        selected.map(repo => axios.get(repo.languages_url, { headers: { Accept: "application/vnd.github+json" } }))
      );

      repositories.value = selected.map((repo, index) => {
        const languageResult = languageResponses[index];
        let languages = [];

        if (languageResult.status === "fulfilled") {
          const entries = Object.entries(languageResult.value.data || {});
          const sorted = entries.sort((a, b) => b[1] - a[1]).slice(0, LANGUAGES_TO_DISPLAY);
          languages = sorted.map(([language]) => language);
        }

        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          htmlUrl: repo.html_url,
          updatedAt: formatDate(repo.updated_at),
          stars: repo.stargazers_count,
          isFork: repo.fork,
          languages,
        };
      });
    } catch (err) {
      error.value = "Unable to load projects from GitHub right now.";
    } finally {
      loading.value = false;
    }
  };

  return {
    repositories,
    loading,
    error,
    fetchRepositories,
  };
});
