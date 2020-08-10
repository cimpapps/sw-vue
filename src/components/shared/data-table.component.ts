import {Component, Prop, Vue} from "vue-property-decorator";
import {AgGridVue} from "ag-grid-vue";
import DropdownComponent from "@/components/shared/dropdown/DropdownComponent.vue";
import {ColumnDefinition, OpenedItem} from "@/store/sw-characters/sw.character.model";

@Component({
  name: 'data-table',
  components: {
    AgGridVue
  }
})
export default class DataTableComponent extends Vue {

  @Prop() private columnDefs!: ColumnDefinition[];

  @Prop() openItem : OpenedItem = {};

  @Prop() private rowData!: any [];

  private columns : any[] = [];

  private rowSelection = null;

  private gridOptions = {};

  private gridApi = {};

  private isFullWidthCell= null;
  private fullWidthCellRenderer= null;

  private  icons= {
      columnRemoveFromGroup: '<i class="fa fa-remove"/>',
      filter: '<i class="fa fa-filter"/>',
      sortAscending: '<i class="fa fa-long-arrow-down"/>',
      sortDescending: '<i class="fa fa-long-arrow-up"/>',
      groupExpanded: '<i class="fa fa-minus-square-o"/>',
      groupContracted: '<i class="fa fa-plus-square-o"/>'
    }

  beforeMount() {
    this.gridOptions = {};

    this.columns = this.columnDefs.map(data =>{
      return {
        hide : data.hidden,
        resizable: true,
        headerName : data.headerName,
        filter : true,
        floatingFilter : true,
        sortable: true
      }
    })

    this.updateCellFullWidth();
  }

  updated(){
    //this.updateCellFullWidth()
    console.log('rowDataupdated', this.rowData)
  }


  updateCellFullWidth(){
    this.isFullWidthCell = (rowData) => {
      console.log('rowData', rowData)
      return rowData.data.fullWidth
    }

    this.fullWidthCellRenderer = (params) =>{
      var eDiv = document.createElement('div');


      const message = `test ${this.openItem}`;

      eDiv.innerHTML =
          '<div><button>Click</button> ' +
          message +
          '</div>';
      const eButton = eDiv.querySelector('button');

      eButton.addEventListener('click', function() {
        alert('button clicked');
      });
      return eDiv.firstChild;
    }
  }

  rowClicked(row : any){
    this.$emit('onRowSelected', row.data.id)
  }


}
