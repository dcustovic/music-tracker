<template>
  <div id="app">
    <v-app>
      <PageHeader />
      <v-container>
        <router-view/>
      </v-container>
      <PageFooter />
     </v-app>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'
import PageFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
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
