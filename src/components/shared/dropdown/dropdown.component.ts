import {Component, Prop, Vue} from "vue-property-decorator";
import {ColumnDefinition} from "@/store/sw-characters/sw.character.model";


@Component
export default class DropdownComponent extends Vue {

  @Prop() private columns!: ColumnDefinition [];

  @Prop() private selected!: ColumnDefinition[];

  private checkedCols: any[];

  beforeMount() {
    debugger;
    this.checkedCols = this.selected ? this.selected.map(col => col.id) : [];
  }

  updated() {
    this.checkedCols = this.selected ? this.selected.map(col => (col.id).toString()) : [];
  }


  public checkElement(id: number) {
    console.log(this.selected);
    this.$emit('onCheckedDropdown', id);
  }

  //
  // public checkedColumns(): number[] {
  //   return this.selected.map(c => c.id);
  // }
  //


}
