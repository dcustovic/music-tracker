<template>
    <v-row class="justify-center">
        <v-col cols="11" sm="9" md="5" lg="5" xl="3">
            <panel title="Edit song">
                <v-text-field class="first"
                required
                :rules="[required]"
                outlined
                dense
                clearable
                label="Title*"
                v-model="song.title"
                >
                </v-text-field>
                <v-text-field
                required
                :rules="[required]"
                outlined
                dense
                clearable
                label="Artist*"
                v-model="song.artist"
                >
                </v-text-field>
                <v-text-field
                required
                :rules="[required]"
                outlined
                dense
                clearable
                label="Genre*"
                v-model="song.genre"
                >
                </v-text-field>
                <v-text-field
                required
                :rules="[required]"
                outlined
                dense
                clearable
                label="Album*"
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
                required
                outlined
                dense
                clearable
                label="YouTube ID"
                v-model="song.youtubeId"
                >
                </v-text-field>
            </panel>
        </v-col>
        <v-col cols="11" sm="9" md="7" lg="7" xl="6">
            <panel title="Song structure">
                <v-textarea class="second"
                required
                :rules="[required]"
                outlined
                dense
                label="Tabs*"
                v-model="song.tab"
                >
                </v-textarea>
                <v-textarea class="second"
                required
                :rules="[required]"
                outlined
                dense
                label="Lyrics*"
                v-model="song.lyrics"
                >
                </v-textarea>
            </panel>
            <div class="required-alert-create-song" v-if="error">
                {{ error }}
            </div>
            <v-btn @click="save" dark class="indigo">
              <v-icon class="mr-2">mdi-content-save-all</v-icon>
                Save song
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
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
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
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
    width: 80% !important;
}
.v-text-field {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}
.v-btn {
    margin-top: 10px;
}
.required-alert-create-song {
  margin: 15px 0px;
  color: red;
}
</style>
