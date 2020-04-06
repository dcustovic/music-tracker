<template>
    <v-row class="justify-center">
        <v-col v-if="isUserLoggedIn" cols="12" sm="10" md="9" lg="7" xl="5">
          <songs-search-panel />
          <songs-panel />
        </v-col>
        <v-col v-else cols="12" sm="10" md="9" lg="7" xl="5">
          <panel
          title="Songs"
          description="Please login to see your content."
          />
        </v-col>
    </v-row>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'

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
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
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
