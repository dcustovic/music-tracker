<template>
    <v-row class="justify-center">
        <v-col sm="8" md="8" lg="6" xl="6">
            <panel title="Songs">
                <v-btn fab light right absolute
                @click="navigateTo ({ name: 'songs-create' })"
                class="green accent-3"
                slot="action">
                  <v-icon medium>mdi-plus</v-icon>
                </v-btn>
                <div v-for="song in songs" :key="song.id">
                    {{ song.title }} -
                    {{ song.artist }} -
                    {{ song.genre }} -
                    {{ song.album }} -
                    {{ song.albumImageUrl }} -
                    {{ song.youtubeId }} -
                    {{ song.lyrics }} -
                    {{ song.tab }}
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
</style>
