<template>
    <panel title="Song metadata">
        <v-row>
            <v-col>
                <div class="song-title mt-12">
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
                <v-card raised shaped class="mx-auto" max-width="200">
                    <v-img width="200" :src="song.albumImageUrl" class="album-image mt-12" />
                </v-card>
                    {{ song.album }}
            </v-col>
        </v-row>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
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
