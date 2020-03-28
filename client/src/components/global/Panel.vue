<template>
  <div class="panel">
      <v-card color="grey lighten-3">
            <v-toolbar dense dark color="indigo darken-1">
                <v-toolbar-title>{{ title }}
                </v-toolbar-title>
            <slot name="action" />
            </v-toolbar>
            <div>
                <slot>
                    <br>
                    No slot content defined.
                    <br>
                    {{ description }}
                    <br>
                    <br>
                </slot>
            </div>
      </v-card>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'description'
  ]
}

</script>

<style scoped>
.panel {
  margin-top: 50px;
  margin-bottom: 0px;
}
</style>
