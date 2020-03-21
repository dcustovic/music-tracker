<template>
    <v-row class="justify-center">
      <!-- METADATA -->
        <v-col cols="12" sm="10" md="8" lg="6" xl="5">
          <song-metadata :song="song" />
        </v-col>

      <!-- YOUTUBE -->
        <v-col cols="12" sm="10" md="12" lg="6" xl="5">
          <you-tube :youtubeId="song.youtubeId" />
        </v-col>

      <!-- TABS -->
        <v-col cols="12" sm="10" md="12" lg="8" xl="7">
          <tab :song="song" />
        </v-col>

      <!-- LYRICS -->
        <v-col cols="12" sm="10" md="12" lg="4" xl="4">
          <lyrics :song="song" />
        </v-col>
    </v-row>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
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
