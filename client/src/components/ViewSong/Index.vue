<template>
  <div>
    <v-row>
        <v-col sm="6" md="5" lg="5" xl="5">
          <song-metadata :song="song" />
        </v-col>

        <v-row>
            <v-col>
                <panel title="YouTube">
                    <!-- youtube embedded -->
                </panel>
            </v-col>
        </v-row>

        <v-col sm="6" md="7" lg="7" xl="7">
            <panel title="Tabs">
                <textarea
                readonly
                v-model="song.tab"
                >
                </textarea>
            </panel>
        </v-col>
    </v-row>
  </div>
</template>

<script>
import SongMetadata from './SongMetadata'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

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
    Panel,
    SongMetadata
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
