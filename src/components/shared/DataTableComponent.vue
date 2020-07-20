<template>
  <div>
    <ag-grid-vue style="width: 700px; height: 300px;"
                 class="ag-theme-alpine"
                 :columnDefs="columnDefs"
                 rowSelection="multiple"
                 :rowData="rowData"
    >
    </ag-grid-vue>
    <DropdownComponent></DropdownComponent>
  </div>
</template>

<script lang="ts" src="./data-table.component.ts">
</script>

<style scoped lang="scss">
  @import "../../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";

</style>
