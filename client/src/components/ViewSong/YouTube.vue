<template>
    <panel title="YouTube video">
        <youtube
        :video-id="youtubeId"
        player-width="458"
        player-height="328"
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
