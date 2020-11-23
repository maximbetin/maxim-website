<template>
  <v-layout align-center column class="avatar-wrapper">
    <div align="center" color="transparent">
      <v-avatar color="transparent" size="150">
        <v-img
          src="../assets/profile-picture-2.jpeg"
          class="profile-picture"
        ></v-img>
      </v-avatar>

      <br />

      <div class="display-3 font-weight-light black--text text-xs-center">
        Maxim Betin
      </div>
      <div class="display-1 font-weight-thin black--text text-xs-center">
        Computer Engineer
      </div>
    </div>

    <v-row>
      <v-col class="mx-10 mt-8">
        <v-btn class="button" outlined @click="linkedin">
          <v-icon left>mdi-linkedin</v-icon>
          LinkedIn
        </v-btn>
      </v-col>

      <v-col class="mx-10 mt-8">
        <v-btn class="button" outlined @click="stack">
          <v-icon left>mdi-stack-overflow</v-icon>
          StackOverflow
        </v-btn>
      </v-col>

      <v-col class="mx-10 mt-8">
        <v-btn class="button" outlined @click="github">
          <v-icon left>mdi-github</v-icon>
          GitHub
        </v-btn>
      </v-col>

      <v-col class="mx-10 mt-8">
        <v-btn class="button" outlined @click="cv">
          <v-icon left>mdi-pencil-box</v-icon>
          CV
        </v-btn>
      </v-col>
    </v-row>
  </v-layout>
</template>

<style>
.avatar-wrapper {
  padding: 30px;
  background-color: #eceff1;
  border-style: groove;
  border-color: #fafafa;
}

.button {
  background-color: #90a4ae;
  border-color: #546e7a;
  border-style: solid;
}

.profile-picture {
  border: 3px solid #90a4ae;
}
</style>

<script>
export default {
  name: "Presentation",
  
  methods: {
    linkedin: function() {
      window.open("https://www.linkedin.com/in/maxim-betin", "_blank");
    },
    stack: function() {
      window.open("https://stackoverflow.com/users/9146820/maxim", "_blank");
    },
    github: function() {
      window.open("https://github.com/maximbetin", "_blank");
    },
    cv: function() {
      window.open(
        "https://storage.googleapis.com/maxim-portfolio/Maxim%20Betin%20-%20Resume%20(English).pdf",
        "_blank"
      );
    },
    scrolldown: function() {
      window.open("#none", "_blank");
    }
  }
};
</script>
