<template>
    <panel title="Search" >
        <v-text-field class="line"
            clearable
            placeholder="Search by title, artist, album or genre"
            v-model="search"
            prepend-icon="mdi-music-note"
            >
        </v-text-field>
    </panel>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        path: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 500),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>
.line {
    width: 93%;
    margin-left: 8px;
}
</style>
