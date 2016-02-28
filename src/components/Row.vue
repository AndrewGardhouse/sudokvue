<template>
  <tr>
    <td is="cell" :row='row' :column="0" :solved='solved'></td>
    <td is="cell" :row='row' :column="1" :solved='solved'></td>
    <td is="cell" :row='row' :column="2" :solved='solved'></td>
    <td is="cell" :row='row' :column="3" :solved='solved'></td>
    <td is="cell" :row='row' :column="4" :solved='solved'></td>
    <td is="cell" :row='row' :column="5" :solved='solved'></td>
    <td is="cell" :row='row' :column="6" :solved='solved'></td>
    <td is="cell" :row='row' :column="7" :solved='solved'></td>
    <td is="cell" :row='row' :column="8" :solved='solved'></td>
  </tr>
</template>

<script>
import Cell from './Cell.vue'

export default {
  name: 'Row',
  props: {
    row: Number,
    solved: Boolean
  },
  components: {
    Cell
  }
}
</script>

<style>
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
</style>