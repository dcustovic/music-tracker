<template>
<div>
    <panel title="Song metadata">
        <v-row>
            <v-col class="my-auto">
                <div class="song-title">
                    {{ song.title }}
                </div>
                <div class="song-artist">
                    {{ song.artist }}
                </div>
                <div class="song-genre">
                    {{ song.genre }}
                </div>
                <div class="song-album">
                </div>
            </v-col>

            <v-col>
                <v-card raised shaped class="mb-12 mx-auto" max-width="200">
                    <v-img width="200" :src="song.albumImageUrl" class="album-image mt-12" />
                    {{ song.album }}
                </v-card>
            </v-col>
        </v-row>
        <v-btn
          rounded
          @click="navigateTo ({name: 'song-edit', params: {songId: song.id}})"
          class="primary">
          Edit
        </v-btn>
    </panel>
    </div>
</template>

<script>
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
