<template>
  <panel title="YouTube video">
    <v-row>
      <v-col>
        <youtube
        :video-id="youtubeId"
        player-width="500"
        player-height="303"
        />
      </v-col>
    </v-row>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>

</style>
