<template>
<div>
    <panel title="Song details">
        <v-row >
            <v-col>
              <v-card class="ml-11 mb-9 mr-9" raised  max-width="220" max-height="250">
                  <v-img width="220" height="250" :src="song.albumImageUrl" class="album-image mt-12" />
              </v-card>
            </v-col>
            <v-col class="my-auto mr-10">
                <div class="song-album">
                  {{ song.album }}
                </div>
                <div class="song-title">
                    {{ song.title }}
                </div>
                <br>
                <div class="song-artist">
                    {{ song.artist }}
                </div>
                <div class="song-genre">
                    {{ song.genre }}
                </div>
                <v-btn
                  rounded
                  :to="{
                    name: 'song-edit',
                    params: {songId: song.id}
                    }"
                  class="primary my-3">
                  Edit
                </v-btn>
            </v-col>
        </v-row>
    </panel>
  </div>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: none;
}
.song-album {
  font-size: 31px;
}
.song-title {
  font-size: 23px;
}
.song-artist {
  font-size: 19px;
}
.song-genre {
  font-size: 15px;
}
</style>
