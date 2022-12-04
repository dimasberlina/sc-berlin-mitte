<template>
  <div>
    <v-app-bar color="white" prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
      <v-toolbar-title :class="[xs ? 'nav-title__mobile' : '', 'nav-title']">
        <div class="w-100 d-flex align-center justify-center">
          Schützenclub
          <img height="50" width="50" :class="smAndUp ? 'mx-2' : 'mx-1'" src="/logo.png" />
          Berlin Mitte e.V.
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" icon="mdi-login" to="/login"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" :style="mdAndUp ? null : 'width: 100%;'">
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const items = [
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'bar',
  },
  {
    title: 'Fizz',
    value: 'fizz',
  },
  {
    title: 'Buzz',
    value: 'buzz',
  },
]

const { xs, smAndUp, mdAndUp } = useDisplay()
const drawer = ref(false)
const group = ref(null)

onMounted(() => {
  if (mdAndUp.value) {
    drawer.value = true
  }
})

watch(group, () => {
  drawer.value = false
})
</script>

<style scoped lang="scss">
.nav-title {
  width: 100%;
  flex: unset;
  letter-spacing: 8px;

  &__mobile {
    margin: 2px;
    font-size: 11px;
    letter-spacing: 0;
  }
}
</style>