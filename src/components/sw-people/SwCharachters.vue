<template>
  <div>
    {{characters | json}}
    <data-table
    :columnDefs="columnDefs"
    :rowData="characters"
    >
    </data-table>
  </div>
</template>

<script lang="ts" src="./sw-characters.component.ts">

</script>

<style scoped>

</style>
