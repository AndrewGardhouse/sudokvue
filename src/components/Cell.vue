<template>
  <td v-bind:class="{ 'error': isNotValid, 'puzzle' : puzzleAnswer }">
    <input type="number" maxlength="1" min="1" max="9" v-model="answer" v-on:change="checkAnswer(answer)" :disabled="solved">
  </td>
</template>

<script>
import validation from '../solver.js'

export default {
  name: 'Cell',
  props: {
    row: Number,
    column: Number,
    solved: Boolean
  },
  data () {
    return {
      coordinate: [this.row, this.column],
      answer: '',
      isNotValid: false,
      puzzleAnswer: false
    }
  },
  created () {
    this.$parent.$parent.createPuzzle()
  },
  methods: {
    checkAnswer (answer) {
      if (answer > 9 || answer < 0 || !validation.answerFits(Number(answer), this.coordinate, this.$parent.$parent.puzzle) && answer !== '') {
        this.isNotValid = true
      } else {
        this.isNotValid = false
      }
      this.$parent.$parent.createPuzzle()
      this.$parent.$parent.canSolve()
    }
  }
}
</script>

<style>
@media (min-width: 992px) { 
  td {
    height: 59px;
  }
}

td {
  text-align: center;
  border: 1px black solid;
}

td:nth-child(3), td:nth-child(6) {
  border-right: 3px solid black;
}

input {
  text-align: center;
  border: none !important;
  padding: 0 !important;
  font-size: 2.8rem;
  background: transparent;
}

input:focus {
  outline: none;
}

input[disabled] {
  color: black !important;
  opacity: 1;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

.error {
  background-color: rgb(255, 153, 153);
}

.puzzle {
  background-color: rgba(0, 0, 0, 0.1); 
}
</style>