<template>
    <v-row class="justify-center">
        <v-col sm="8" md="8" lg="6" xl="6">
            <panel title="Songs">
                <v-btn to="/songs/create" fab light right absolute
                class="green accent-3"
                slot="action">
                  <v-icon medium>mdi-plus</v-icon>
                </v-btn>
                <div class="song" v-for="song in songs" :key="song.id">
                  <v-row>
                    <v-col>
                      <div class="song-title">
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
                      <img :src="song.albumImageUrl" class="album-image" />
                    </v-col>
                  </v-row>
                </div>
            </panel>
        </v-col>
    </v-row>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
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
  font-size: 30px;
}
.song-artist {
  font-size: 22px;
}
.song-genre {
  font-size: 16px;
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
