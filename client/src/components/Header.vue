<template>
  <div class="nav">
    <v-app-bar  dark src="https://media.gettyimages.com/photos/tell-me-if-i-go-off-key-please-picture-id624474514?s=2048x2048" fixed>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title @click="navigateTo ('/')">
          <v-btn text>
            Guitar Tabs
          </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="navigateTo ('register')">
        Sign Up
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.nav {
    margin-bottom: 50px;
}
</style>
