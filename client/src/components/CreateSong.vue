<template>
    <v-row class="justify-start">
        <v-col sm="6" md="6" lg="4" xl="4">
            <panel title="Create song">
                <v-text-field class="first"
                outlined
                dense
                clearable
                label="Title"
                v-model="song.title"
                >
                </v-text-field>
                <v-text-field
                outlined
                dense
                clearable
                label="Artist"
                v-model="song.artist"
                >
                </v-text-field>
                <v-text-field
                outlined
                dense
                clearable
                label="Genre"
                v-model="song.genre"
                >
                </v-text-field>
                <v-text-field
                outlined
                dense
                clearable
                label="Album"
                v-model="song.album"
                >
                </v-text-field>
                <v-text-field
                outlined
                dense
                clearable
                label="Album Image URL"
                v-model="song.albumImageUrl"
                >
                </v-text-field>
                <v-text-field
                outlined
                dense
                clearable
                label="YouTube ID"
                v-model="song.youtubeId"
                >
                </v-text-field>
            </panel>
        </v-col>
        <v-col sm="6" md="6" lg="4" xl="4">
            <panel title="Song structure">
                <v-textarea class="second"
                outlined
                dense
                label="Tabs"
                v-model="song.tab"
                >
                </v-textarea>
                <v-textarea
                outlined
                dense
                label="Lyrics"
                v-model="song.lyrics"
                >
                </v-textarea>
            </panel>
            <v-btn @click="create" dark class="indigo">
                Create song
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.postSong(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.first {
    margin-top: 25px;
}
.second {
    margin-top: 25px;
}
.v-text-field {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}
.v-btn {
    margin-top: 10px;
}
</style>
