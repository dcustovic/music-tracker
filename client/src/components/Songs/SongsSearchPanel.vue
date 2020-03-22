<template>
    <panel title="Search" >
        <v-text-field class="line"
            placeholder="Search by title, artist, album or genre"
            v-model="search"
            prepend-icon="mdi-music-note"
            >
        </v-text-field>
    </panel>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>
.line {
    width: 92%;
    margin-left: 8px;
}
</style>
