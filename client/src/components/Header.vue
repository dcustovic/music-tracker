<template>
  <div class="nav">
    <v-app-bar dark src="https://media.gettyimages.com/photos/tell-me-if-i-go-off-key-please-picture-id624474514?s=2048x2048" fixed>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title @click="navigateTo ('/homepage')">
          <span class="logo">GuitarTabs</span>
      </v-toolbar-title>
      <v-btn class="ml-4" text @click="navigateTo ({ name: 'songs' })">
        Browse
        <v-icon class="ml-2">mdi-format-align-left</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn text @click="navigateTo ('login')" v-if="!$store.state.isUserLoggedIn">
        Login
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn text @click="navigateTo ('register')" v-if="!$store.state.isUserLoggedIn">
        Sign Up
        <v-icon></v-icon>
      </v-btn>
      <v-btn text @click="logout" v-if="$store.state.isUserLoggedIn">
        Log Out
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setToken', null)
      this.$router.push({ name: 'HelloWorld' })
    }
  }
}
</script>

<style scoped>
.nav {
    margin-bottom: 50px;
}
.logo {
  cursor: pointer;
}
.logo:hover {
  color: rgb(134, 167, 255)
}
</style>
