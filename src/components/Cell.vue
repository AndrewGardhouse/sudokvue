<template>
  <td v-bind:class="{ 'error': isNotValid }">
    <input type="number" maxlength="1" min="1" max="9" v-model="answer" v-on:change="answerValid(answer)" :disabled="solved">
  </td>
</template>

<script>
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
      isNotValid: false
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

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>