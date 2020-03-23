<template>
    <panel title="Songs">
        <v-btn to="/songs/create" fab light right absolute
        class="cyan accent-3"
        slot="action">
            <v-icon medium>mdi-plus</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="song.id">
            <v-row>
            <v-col>
                <hr>
                <div class="song-title mt-12">
                {{ song.title }}
                </div>
                <div class="song-artist">
                {{ song.artist }}
                </div>
                <div class="song-genre">
                {{ song.genre }}
                </div>
                <v-btn rounded @click="navigateTo ({name: 'song', params: {songId: song.id}})" class="primary">
                View
                </v-btn>
            </v-col>
            <v-col>
                <v-card raised shaped class="mx-auto" max-width="200">
                <v-img width="200" :src="song.albumImageUrl" class="album-image mt-12" />
                </v-card>
            </v-col>
            </v-row>
        </div>
    </panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
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
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.getSongs(value)).data
      }
    }
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
