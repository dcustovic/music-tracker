<template>
    <v-row class="justify-center">
        <v-col sm="8" md="8" lg="6" xl="6">
            <panel title="Songs">
                <div v-for="song in songs" :key="song.id">
                    {{ song.title }} -
                    {{ song.artist }} -
                    {{ song.album }}
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
  async mounted () {
    // do a req to the backend for all songs
    this.songs = (await SongsService.getSongs()).data
  }
}
</script>

<style scoped>
</style>
