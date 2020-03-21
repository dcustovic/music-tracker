<template>
    <panel title="YouTube Video">
        <youtube
        :video-id="youtubeId"
        player-width="420"
        player-height="290"
        />
    </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
