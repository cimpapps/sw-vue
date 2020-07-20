import {Component, Prop, Vue} from "vue-property-decorator";
import {ColumnDefinition} from "@/store/sw-characters/sw.character.model";


@Component
export default class DropdownComponent extends Vue {

  @Prop() private columns!: ColumnDefinition [];
  private selected = this.getSelected();
  public checkElement(id: number) {
    console.log(this.selected);
    this.$emit('onCheckedDropdown', id);
  }

  getSelected() {
    return this.columns.filter(col => !col.hidden)
      .map(col => col.id);
  }

}
