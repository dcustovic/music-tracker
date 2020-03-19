<template>
    <v-row class="justify-center">
        <v-col sm="8" md="8" lg="6" xl="6">
            <panel  title="Create song">
                <v-text-field class="first"
                outlined
                dense
                clearable
                label="Title"
                v-model="title"
                >
                </v-text-field>
                <v-text-field
                outlined
                dense
                clearable
                label="Artist"
                v-model="artist"
                >
                </v-text-field>
                <v-text-field
                outlined
                dense
                clearable
                label="Genre"
                v-model="genre"
                >
                </v-text-field>
                <v-text-field
                outlined
                dense
                clearable
                label="Album"
                v-model="album"
                >
                </v-text-field>
                <v-text-field
                outlined
                dense
                clearable
                label="Album Image URL"
                v-model="albumImageUrl"
                >
                </v-text-field>
                <v-text-field
                outlined
                dense
                clearable
                label="YouTube ID"
                v-model="youtubeId"
                >
                </v-text-field>
            </panel>
        </v-col>
    </v-row>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
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
}
</script>

<style scoped>
.first {
    margin-top: 25px;
}
.v-text-field {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
