<template>
  <div id="app">
      <div class="container">
        <div class="row">
          <div class="column column-100"> 
            <h1>Sudokvue: <small>A Sudoku Solver Built With VueJS</small></h1>
          </div>
        </div>
        <div class="row">
          <div class="column column-50 column-offset-25">
            <table>
              <tr is="row"></tr>
              <tr is="row"></tr>
              <tr is="row"></tr>
              <tr is="row"></tr>
              <tr is="row"></tr>
              <tr is="row"></tr>
              <tr is="row"></tr>
              <tr is="row"></tr>
              <tr is="row"></tr>
            </table>         
          </div>
        </div>        
      </div>
    <!-- <img class="logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Row from './components/Row'

export default {
  components: {
    Row
  }
}
</script>

<style>
h1 {
  text-align: center;
}

tr {
  border-right: 3px solid black;
  border-left: 3px solid black;
}

tr:first-child {
  border-top: 3px solid black;
}

tr:nth-child(3), tr:nth-child(6), tr:last-child {
  border-bottom: 3px solid black;
}

/*body {
  font-family: Helvetica, sans-serif;
}*/
</style>
