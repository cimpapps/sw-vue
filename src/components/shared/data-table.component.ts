import {Component, Prop, Vue} from "vue-property-decorator";
import {AgGridVue} from "ag-grid-vue";
import {ColumnDefinition} from "@/components/shared/column-definition";
import DropdownComponent from "@/components/shared/dropdown/DropdownComponent.vue";

@Component({
  name: 'data-table',
  components: {
    AgGridVue,
    DropdownComponent
  }
})
export default class DataTableComponent extends Vue {

  @Prop() private columnDefs!: ColumnDefinition[];
  @Prop() private rowData!: any [];

  beforeMount() {
    console.log(this.rowData);
  }

}
