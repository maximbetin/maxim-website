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
          skill="GCP"
          level="80"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Python"
          level="75"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Bash/Shell"
          level="75"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Linux/Unix"
          level="70"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Terraform"
          level="70"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Ansible"
          level="70"
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
          skill="Docker"
          level="65"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="SQL"
          level="65"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Java"
          level="65"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Maven"
          level="65"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="PHP"
          level="65"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="HTML"
          level="65"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="CSS"
          level="65"
        />

        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="UI/UX"
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
          skill="JavaScript"
          level="60"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Node.js"
          level="60"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="C/C++"
          level="60"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Go"
          level="60"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Swift"
          level="60"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="P. Photon"
          level="55"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Arduino"
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
