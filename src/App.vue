<template>
  <div id="app">
    <div class="container">
      <div class="row text-center">
        <h1 class="title">Sudokvue: <small>A Sudoku Solver Built With VueJS</small></h1>
      </div>
      <board></board>
    </div>
  </div>
</template>

<script>
import Board from './components/Board.vue'
import Info from './components/Info.vue'

export default {
  components: {
    Board,
    Info
  }
}
</script>

<style>
body {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif; 
  background-color: #e6f2ff; 
}

.title, .buttons {
  margin-bottom: 1%;
}
</style>
