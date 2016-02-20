<template>
  <td>
    <input type="number" name="number" maxlength="1" min="1" max="9">
  </td>
</template>

<script>
export default {

}
</script>

<style>
td {
  border: 1px black solid;
  height: 3em;
}

input {
  text-align: center;
  border: none !important;
  padding: 0 !important;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>