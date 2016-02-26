<template>
  <td>
    <input type="number" maxlength="1" min="1" max="9" v-model="answer">
  </td>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    row: Number,
    column: Number
  },
  data () {
    return {
      coordinate: [this.row, this.column],
      answer: ''
    }
  }
}
</script>

<style>
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