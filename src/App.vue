<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="column column-100"> 
          <h1>Sudokvue: <small>A Sudoku Solver Built With VueJS</small></h1>
        </div>
      </div>
      <div class="row">
        <div class="column column-50 column-offset-20">
          <table>
            <tr is="row" :row="0"></tr>
            <tr is="row" :row="1"></tr>
            <tr is="row" :row="2"></tr>          
            <tr is="row" :row="3"></tr>
            <tr is="row" :row="4"></tr>
            <tr is="row" :row="5"></tr>
            <tr is="row" :row="6"></tr>
            <tr is="row" :row="7"></tr>
            <tr is="row" :row="8"></tr>
          </table>
        </div>
        <div class="column column-25"> 
          <button class="button" v-on:click="solvePuzzle">Solve Puzzle</button>
          <button class="button" v-on:click="clearPuzzle">Clear Puzzle</button>
        </div>
      </div>        
    </div>
    <!-- <img class="logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Row from './components/Row'
import solver from './solver.js'

export default {
  components: {
    Row
  },
  data () {
    return {
      puzzle: [],
      emptySpots: []
    }
  },
  created () {
    window.hello = this.$children.sort((a, b) => {return a.row - b.row})
  },
  methods: {
    createPuzzle () {
      let rows = this.$children.sort((a, b) => {return a.row - b.row})
      let puzzleArray = []
      this.puzzle = []

      for (let row = 0; row < rows.length; row++) {
        for (let column = 0; column < this.$children[row].$children.length; column++) {
          puzzleArray.push(Number(this.$children[row].$children[column].answer))
        }
      }
      while (puzzleArray.length) this.puzzle.push(puzzleArray.splice(0, 9))
    },
    findEmptySpots () {
      let rows = this.$children.sort((a, b) => {return a.row - b.row})
      this.emptySpots = []

      for (let row = 0; row < rows.length; row++) {
        for (let column = 0; column < this.$children[row].$children.length; column++) {
          if (this.$children[row].$children[column].answer === '') {
            this.emptySpots.push(this.$children[row].$children[column])
          }
        }
      }
    },
    solvePuzzle () {
      this.findEmptySpots()
      this.createPuzzle()

      for (let i = 0; i < this.emptySpots.length;) {
        let answer = this.puzzle[this.emptySpots[i].row][this.emptySpots[i].column] + 1
        let found = false

        while (!found && answer <= 9) {
          // if the answer fits, assign the answer to the cell and the puzzle, set found to true and move to the next cell
          if (solver.answerFits(answer, this.emptySpots[i].coordinate, this.puzzle)) {
            found = true
            this.emptySpots[i].answer = answer
            this.puzzle[this.emptySpots[i].row][this.emptySpots[i].column] = answer
            i++
          // otherwise try another answer
          } else {
            answer++
          }
        // if no number from 1 to 9 fits, set the cell answer to 0 and go back to the previous cell
        }
        if (!found) {
          this.emptySpots[i].answer = 0
          this.puzzle[this.emptySpots[i].row][this.emptySpots[i].column] = 0
          i--
        }
      }
    },
    clearPuzzle () {
      for (var i = 0; i < this.$children.length; i++) {
        for (var j = 0; j < this.$children[i].$children.length; j++) {
          this.$children[i].$children[j].answer = ''
        }
      }
    }
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

td {
  border: 1px black solid;
  height: 3.7em;
}

td:nth-child(3), td:nth-child(6) {
  border-right: 3px solid black;
}

input {
  text-align: center;
  border: none !important;
  padding: 0 !important;
  font-size: 3rem;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>
