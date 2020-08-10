import {Component, Prop, Vue} from "vue-property-decorator";
import {AgGridVue} from "ag-grid-vue";
import DropdownComponent from "@/components/shared/dropdown/DropdownComponent.vue";
import {ColumnDefinition} from "@/store/sw-characters/sw.character.model";

@Component({
  name: 'data-table',
  components: {
    AgGridVue
  }
})
export default class DataTableComponent extends Vue {

  @Prop() private columnDefs!: ColumnDefinition[];
  @Prop() private rowData!: any [];

  private columns : any[] = [];

  private  icons= {
      columnRemoveFromGroup: '<i class="fa fa-remove"/>',
      filter: '<i class="fa fa-filter"/>',
      sortAscending: '<i class="fa fa-long-arrow-down"/>',
      sortDescending: '<i class="fa fa-long-arrow-up"/>',
      groupExpanded: '<i class="fa fa-minus-square-o"/>',
      groupContracted: '<i class="fa fa-plus-square-o"/>'
    }

  beforeMount() {
    console.log('test', this.rowData)

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
  }

  doSomenthing(){
    console.log('helooo')
  }


}
