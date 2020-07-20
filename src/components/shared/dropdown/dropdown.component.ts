import {Component, Prop, Vue} from "vue-property-decorator";
import {ColumnDefinition} from "@/store/sw-characters/sw.character.model";


@Component
export default class DropdownComponent extends Vue {

  @Prop() private columns!: ColumnDefinition [];
  @Prop() private selectedColumns!: ColumnDefinition[];

}
