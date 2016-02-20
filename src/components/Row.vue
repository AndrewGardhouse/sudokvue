<template>
  <tr>
    <td is="cell"></td>
    <td is="cell"></td>
    <td is="cell"></td>
    <td is="cell"></td>
    <td is="cell"></td>
    <td is="cell"></td>
    <td is="cell"></td>
    <td is="cell"></td>
    <td is="cell"></td>
  </tr>
</template>

<script>
import Cell from './Cell.vue'

export default {
  components: {
    Cell
  }
}
</script>

<style>
td:nth-child(3), td:nth-child(6) {
  border-right: 3px solid black;
}

</style>