<template>
  <div id="app">
    <div class="container">
      <div class="row text-center">
        <h1 class="title">Sudokvue: <small>A Sudoku Solver Built With VueJS</small></h1>
      </div>
      <board></board>
      <div class="icon-credit">Icons made by <a href="https://www.flaticon.com/authors/vignesh-oviyan" title="Vignesh Oviyan">Vignesh Oviyan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </div>
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  components: {
    Board
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

.icon-credit {
  text-align: center;
}
</style>
