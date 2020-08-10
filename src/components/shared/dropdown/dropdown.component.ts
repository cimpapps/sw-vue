import {Component, Prop, Vue} from "vue-property-decorator";
import {ColumnDefinition} from "@/store/sw-characters/sw.character.model";


@Component
export default class DropdownComponent extends Vue {

  @Prop() private columns!: ColumnDefinition [];

  @Prop() private selected!: ColumnDefinition[];


  public checkElement(id: number) {
    console.log(this.selected);
    this.$emit('onCheckedDropdown', id);
  }

}
