<template>
  <panel title="Lyrics">
    <v-row>
      <v-col>
        <textarea
          readonly
          v-model="song.lyrics"
        >
        </textarea>
      </v-col>
    </v-row>

  </panel>
</template>

<script>

export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
.panel {
  margin-top: 0px;
}
</style>
