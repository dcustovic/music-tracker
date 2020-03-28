<template>
<v-container>
    <v-row class="justify-center">
      <!-- METADATA -->
        <v-col cols="10" sm="11" md="11" lg="6" xl="6">
          <song-metadata :song="song" />
        </v-col>

      <!-- YOUTUBE -->
        <v-col cols="10" sm="11" md="11" lg="6" xl="6">
          <you-tube :youtubeId="song.youtubeId" />
        </v-col>

      <!-- TABS -->
        <v-col cols="10" sm="11" md="11" lg="7" xl="7">
          <tab :song="song" />
        </v-col>

      <!-- LYRICS -->
        <v-col cols="10" sm="11" md="11" lg="5" xl="5">
          <lyrics :song="song" />
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      song: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
textarea {
    width: 100%;
    height: 500px;
    font-family: monospace;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
}
</style>
