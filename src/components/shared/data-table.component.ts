import {Component, Prop, Vue} from "vue-property-decorator";
import {AgGridVue} from "ag-grid-vue";
import {ColumnDefinition} from "@/components/shared/column-definition";

@Component({
  name: 'data-table',
  components: {AgGridVue}
})
export default class DataTableComponent extends Vue {

  @Prop() private columnDefs!: ColumnDefinition[];
  @Prop() private rowData!: any [];

  beforeMount() {
    console.log(this.rowData);
  }

}
