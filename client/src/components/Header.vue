<template>
  <div class="nav">
    <v-app-bar fixed dark src="https://media.gettyimages.com/photos/man-playing-guitar-on-stage-picture-id820375234?s=2048x2048">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title>
          <router-link
          class="logo"
          tag="span"
          :to="{
            name: 'songs'
          }"
          >GuitarTabs
          </router-link>
      </v-toolbar-title>
      <v-btn class="ml-4" text :to="{ name: 'songs' }">
        Browse
        <v-icon class="ml-2">mdi-format-align-left</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn text :to="{ name: 'login' }" v-if="!$store.state.isUserLoggedIn">
        Login
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn text :to="{ name: 'register'}" v-if="!$store.state.isUserLoggedIn">
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
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setToken', null)
      this.$router.push({ name: 'songs' })
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
/*
.logo:hover {
  color: rgb(134, 167, 255)
}
*/
</style>
