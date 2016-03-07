<template>
  <div class="row">
    <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
      <table>
        <tr is="row" :row="0" :solved='solved'></tr>
        <tr is="row" :row="1" :solved='solved'></tr>
        <tr is="row" :row="2" :solved='solved'></tr>
        <tr is="row" :row="3" :solved='solved'></tr>
        <tr is="row" :row="4" :solved='solved'></tr>
        <tr is="row" :row="5" :solved='solved'></tr>
        <tr is="row" :row="6" :solved='solved'></tr>
        <tr is="row" :row="7" :solved='solved'></tr>
        <tr is="row" :row="8" :solved='solved'></tr>
      </table>
      <div class="text-center buttons">
        <div v-if="canNotSolve">
          <h4>You must fix these errors before the puzzle can be solved</h4>
        </div>      
        <div v-else>
          <button class="btn btn-success" v-on:click="solvePuzzle" :disabled="solved">Solve Puzzle</button>
          <button class="btn btn-danger" v-on:click="clearPuzzle">Clear Board</button>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Row from './Row.vue'
import solver from '../solver.js'

export default {
  components: {
    Row
  },
  data () {
    return {
      puzzle: [],
      emptySpots: [],
      solved: false,
      canNotSolve: false
    }
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
      this.solved = true
    },
    clearPuzzle () {
      if (this.solved) {
        this.solved = false
      }
      for (var i = 0; i < this.$children.length; i++) {
        for (var j = 0; j < this.$children[i].$children.length; j++) {
          this.$children[i].$children[j].answer = ''
          this.$children[i].$children[j].isNotValid = false
        }
      }
      this.puzzle = []
      this.createPuzzle()
    },
    canSolve () {
      // if any of the cells have the isNotValid flag, set canNotSolve to true and end the function call
      console.log('canSolve() is being called')
      for (var i = 0; i < this.$children.length; i++) {
        for (var j = 0; j < this.$children[i].$children.length; j++) {
          if (this.$children[i].$children[j].isNotValid) {
            this.canNotSolve = true
            return
          }
          this.canNotSolve = false
        }
      }
    }
  }
}
</script>

<style>
table {
  width: 100%;
  margin-bottom: 2%;
  background-color: white; 
}
</style>
