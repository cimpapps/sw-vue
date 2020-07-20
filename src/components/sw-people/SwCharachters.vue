<template>
  <div>
    <DropdownComponent data-app
                       :columns="columns"
                       :selectedColumns="selectedColumns"
                       @onCheckedDropdown="checkElement"
    >
    </DropdownComponent>

    <data-table
        :columnDefs="selectedColumns"
        :rowData="characters"
    >
    </data-table>
  </div>
</template>

<script lang="ts" src="./sw-characters.component.ts">

</script>

<style scoped>

</style>
