<template>
  <dev v-if="isLoading" />
  <v-card v-else height="100%">
    <v-layout>
      <CoreNav />
      <v-main>
        <v-card-text>
          <slot />
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
const isLoading = ref(true)
onMounted(() => {
  isLoading.value = false
})
</script>

<style>
#__nuxt {
  height: 100vh;
}
</style>