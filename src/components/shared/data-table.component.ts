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

  beforeMount() {
    console.log(this.rowData);
    console.log(this.columnDefs, "column defs");

  }

  updated() {
    console.log(this.columnDefs, "column defs");
  }



}
