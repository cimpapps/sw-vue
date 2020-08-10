<template>
  <div>
    <DropdownComponent data-app
                       :columns="columns"
                       :selectedColumns="selectedColumns"
                       v-on:onCheckedDropdown="checkElement($event)"
    >
    </DropdownComponent>
{{characters | json}}
    <data-table
        :columnDefs="selectedColumns"
        :rowData="characters"
        :infoOpendItems = "openedItem"
        v-on:onRowSelected="rowSelected($event)"
    >
    </data-table>
  </div>
</template>

<script lang="ts" src="./sw-characters.component.ts">

</script>

<style scoped>

</style>
