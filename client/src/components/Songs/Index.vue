<template>
    <v-row class="justify-center">
        <v-col sm="9" md="9" lg="7" xl="5">
          <songs-search-panel />
          <songs-panel />
        </v-col>
    </v-row>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // do a req to the backend for all songs
    this.songs = (await SongsService.getSongs()).data
  }
}
</script>

<style scoped>
.song-title {
  font-size: 27px;
}
.song-artist {
  font-size: 21px;
}
.song-genre {
  font-size: 15px;
  margin-bottom: 10px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
.song {
  padding: 20px;
  height: 290px;
  overflow: hidden;
}
</style>
