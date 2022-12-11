<template>
  <div>
    <h1>Hallo world</h1>
    <v-icon icon="mdi-vuetify"></v-icon>
  </div>
</template>

<script setup type="ts">
onBeforeMount(() => {
  $fetch('/api/appointments')
})
</script>