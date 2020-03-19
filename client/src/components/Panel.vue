<template>
  <div class="panel">
    <v-container>
      <v-card color="grey lighten-4">
            <v-toolbar dense dark class="indigo">
                <v-toolbar-title>{{ title }}
                </v-toolbar-title>
            <slot name="action" />
            </v-toolbar>

            <div>
                <slot>
                    No slot content defined.
                </slot>
            </div>
      </v-card>
    </v-container>
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
