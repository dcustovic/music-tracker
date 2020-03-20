<template>
  <v-footer absolute dark color="grey darken-2">
    <v-row justify="center" class="mt-3">
      GuitarTabs • Vue
    </v-row>
  <v-col cols="12">
    <v-divider></v-divider>
  </v-col>
  <v-row justify="center">
    <v-btn icon href="https://www.instagram.com" target="_blank"><v-icon>mdi-instagram</v-icon></v-btn>
    <v-btn icon href="https://www.facebook.com" target="_blank"><v-icon>mdi-facebook</v-icon></v-btn>
    <v-btn icon href="https://www.youtube.com" target="_blank"><v-icon>mdi-youtube</v-icon></v-btn>
  </v-row>

  </v-footer>
</template>

<style scoped>
.mdi-instagram:hover {
    color: rgb(177, 118, 245);
}
.mdi-facebook:hover {
    color: rgb(111, 126, 255);
}
.mdi-youtube:hover {
    color: rgb(247, 58, 58);
}
</style>
