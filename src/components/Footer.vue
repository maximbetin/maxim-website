<template>
  <v-container fluid class="background-color-fh" id="footer">
    <v-footer class="font-weight-light background-color-fh">
      <v-col class="text-center">
        <strong
          >{{ new Date().getFullYear() }} - Maxim Betin - Copyright @ All Rights
          Reserved</strong
        >
      </v-col>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Footer"
};
</script>
