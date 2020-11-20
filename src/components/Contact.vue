<template>
  <v-container fluid class="background-color" id="contact">
    <v-flex class="contact-wrapper">
      <v-layout align-center column mt-10 mx-15 mb-2>
        <v-flex class="display-1 font-weight-light text-xs-center mb-1">
          Contact
        </v-flex>
      </v-layout>

      <v-divider color="gray"></v-divider>

      <v-layout
        align-center
        justify-center
        column
        my-10
        mx-15
        class="about-text"
      >
        <v-flex align-center>
          <v-row>
            <v-col class="mx-8">
              <v-btn
                class="button"
                outlined
                rounded
                href="https://www.linkedin.com/in/maxim-betin/"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
            <v-col class="mx-8">
              <v-btn
                class="button"
                outlined
                rounded
                href="mailto:betinmaxim@gmail.com"
              >
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </v-col>
            <v-col class="mx-8">
              <v-btn
                class="button"
                outlined
                rounded
                href="https://www.instagram.com/maximbetin/"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-flex>

        <v-row class="mt-10">
          <p style="text-align:center" class="font-weight-normal">
            My preferred method of contact is through my email
            (<a>betinmaxim@gmail.com</a>), if you have other proposals, please
            contact me through it first or message me on my LinkedIn
            <a href="https://www.linkedin.com/in/maxim-betin/">page</a>.
          </p>
        </v-row>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    linkedin: function() {
      window.open("https://www.linkedin.com/in/maxim-betin/", "_blank");
    },
    email: function() {
      window.open("mailto:betinmaxim@gmail.com", "_blank");
    },
    instagram: function() {
      window.open("https://www.instagram.com/maximbetin15/", "_blank");
    },
    scrolldown: function() {
      window.open("#none", "_blank");
    }
  }
};
</script>

<style>
.contact-wrapper {
  margin-left: 15vw;
  margin-right: 15vw;
  color: black;
}

.button {
  padding: 12px;
  background-color: #90a4ae;
}
</style>
