<template>
  <div id="app">
    <v-app>
      <PageHeader />
      <v-container>
        <router-view/>
      </v-container>
     </v-app>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
