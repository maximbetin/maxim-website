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
          skill="Scripting"
          level="90"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Support"
          level="85"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Quality Analysis"
          level="80"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Patch Management"
          level="75"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Incident Handling"
          level="75"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Monitoring"
          level="75"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="BCM"
          level="75"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Kubernetes"
          level="70"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Cloud"
          level="70"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="IaC"
          level="70"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Containerization"
          level="70"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Virtualization"
          level="65"
        />
        <skill-bar
          barSize="small"
          fontColor="white"
          barColor="#B0BEC5"
          skill="Security"
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
