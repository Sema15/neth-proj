<template>
  <div id="app">
    <header></header>
    <Main/>
    <v-footer padless>
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Sergey Semkov <a href="https://github.com/Sema15" target="_blank">GitHub</a></strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}
</style>
