<template>
  <div>
    <DropdownComponent data-app
                       :columns="columns"
                       :selectedColumns="selectedColumns"
                       v-on:onCheckedDropdown="checkElement($event)"
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
