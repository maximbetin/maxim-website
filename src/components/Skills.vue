<template>
  <v-container fluid class="background-color" id="skills">
    <v-flex class="skills-wrapper">
      <!--<v-layout align-center column mx-15>-->
      <v-layout align-center column>
        <v-flex class="display-1 font-weight-light text-xs-center mb-1">
          Skills
        </v-flex>
      </v-layout>

      <v-divider color="gray"></v-divider>

      <br />

      <v-col>
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Python"
          level="85"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="PowerShell"
          level="75"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Prometheus"
          level="75"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="CI/CD"
          level="75"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Grafana"
          level="70"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Docker"
          level="70"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="GCP"
          level="70"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Windows Server"
          level="70"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="IaC"
          level="65"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Kubernetes"
          level="65"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Linux"
          level="65"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Azure"
          level="60"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Networking"
          level="55"
        />
      </v-col>
    </v-flex>
  </v-container>
</template>

<style>
.skills-wrapper {
  margin-left: 15vw;
  margin-right: 15vw;
  color: black;
}
</style>

<script>
import { SkillBar } from "vue-skill-bar";
export default {
  components: {
    "skill-bar": SkillBar
  },
  data() {
    return {};
  }
};
</script>
