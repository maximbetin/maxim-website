import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

const LANGUAGES_TO_DISPLAY = 3;
const MAX_PROJECTS = 12;
const GITHUB_CLIENT = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
  },
});

const createFormatter = () =>
  new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const formatDate = (formatter, isoString) => {
  try {
    return formatter.format(new Date(isoString));
  } catch (error) {
    return isoString;
  }
};

const sanitiseLanguages = (languageResponse) => {
  const entries = Object.entries(languageResponse ?? {});
  const byUsageDescending = entries.sort(([, usageA], [, usageB]) => usageB - usageA);
  return byUsageDescending.slice(0, LANGUAGES_TO_DISPLAY).map(([name]) => name);
};

const normaliseRepository = (formatter, repo, languages) => ({
  id: repo.id,
  name: repo.name,
  description: repo.description,
  htmlUrl: repo.html_url,
  updatedAt: formatDate(formatter, repo.updated_at),
  stars: repo.stargazers_count,
  isFork: repo.fork,
  languages,
});

const orderRepositories = (repositories) => [
  ...repositories.filter((repo) => !repo.fork),
  ...repositories.filter((repo) => repo.fork),
];

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
      const formatter = createFormatter();
      const { data } = await GITHUB_CLIENT.get("/users/maximbetin/repos", {
        params: {
          sort: "updated",
          per_page: 100,
        },
      });

      const ordered = orderRepositories(data).slice(0, MAX_PROJECTS);

      const languages = await Promise.all(
        ordered.map(async (repo) => {
          try {
            const response = await GITHUB_CLIENT.get(repo.languages_url);
            return sanitiseLanguages(response.data);
          } catch (languageError) {
            console.warn(
              `[github-store] unable to load languages for ${repo.full_name}:`,
              languageError
            );
            return [];
          }
        })
      );

      repositories.value = ordered.map((repo, index) =>
        normaliseRepository(formatter, repo, languages[index])
      );
    } catch (requestError) {
      console.error("[github-store] repository fetch failed", requestError);
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
