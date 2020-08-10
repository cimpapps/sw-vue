<template>
  <div class="ag-body-container">
    <ag-grid-vue style="width: 90vw; height: 100vh;"
                 class="ag-theme-alpine"
                 :columnDefs="columnDefs"
                 rowSelection="multiple"
                 :rowData="rowData"
                 :icons = icons
                 :pagination = true
                 :gridOptions = "gridOptions"
                 :isFullWidthCell="isFullWidthCell"
                 :fullWidthCellRenderer="fullWidthCellRenderer"
                 @rowClicked="rowClicked($event)"


    >
    </ag-grid-vue>
  </div>
</template>

<script lang="ts" src="./data-table.component.ts">
</script>

<style scoped lang="scss">
  @import "../../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
  :host{
    width: 100%;
    display: flex;
    align-content: space-evenly;
    justify-content: space-around;

    ag-grid-vue{
      width: 100%;
    }

  }

  .ag-body-container{
    display: flex;
    justify-content: space-around;
  }
</style>
