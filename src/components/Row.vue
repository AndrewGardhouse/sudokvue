<template>
  <tr>
    <td is="cell" :row='row' :column="0"></td>
    <td is="cell" :row='row' :column="1"></td>
    <td is="cell" :row='row' :column="2"></td>
    <td is="cell" :row='row' :column="3"></td>
    <td is="cell" :row='row' :column="4"></td>
    <td is="cell" :row='row' :column="5"></td>
    <td is="cell" :row='row' :column="6"></td>
    <td is="cell" :row='row' :column="7"></td>
    <td is="cell" :row='row' :column="8"></td>
  </tr>
</template>

<script>
import Cell from './Cell.vue'

export default {
  name: 'Row',
  props: {
    row: Number
  },
  components: {
    Cell
  }
}
</script>

<style>
td:nth-child(3), td:nth-child(6) {
  border-right: 3px solid black;
}
td {
  text-align: center;
}
</style>