<template>
<div class="panel">
  <v-card color="grey lighten-4">
        <v-toolbar flat dense dark class="indigo">
            <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>
        <div>
            <slot>
                No slot content defined.
            </slot>
        </div>
  </v-card>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}

</script>

<style scoped>
.panel {
  margin-top: 50px;
}
</style>
