<template>
    <panel title="YouTube video">
        <youtube
        :video-id="youtubeId"
        player-width="420"
        player-height="290"
        />
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
