import {Component, Vue} from "vue-property-decorator";
import DataTableComponent from "@/components/shared/DataTableComponent.vue";
import {ColumnDefinition, SwCharacterModel} from "@/store/sw-characters/sw.character.model";
import {SwCharactersFacade} from "@/store/sw-characters/sw-characters.facade";
import DropdownComponent from "@/components/shared/dropdown/DropdownComponent.vue";

@Component({
  name: 'sw-characters',
  components: {
    'data-table': DataTableComponent,
    DropdownComponent
  },

})
export default class SwCharactersComponent extends Vue {

  private swCharactersFacade: SwCharactersFacade = new SwCharactersFacade();

  beforeMount() {
    this.swCharactersFacade.fetchColumns();
    this.swCharactersFacade.fetchAllSwCharacters();
  }

  get characters(): SwCharacterModel[] {
    return this.swCharactersFacade.getAllSwCharacters();
  }

  get columns(): ColumnDefinition[] {
    return this.swCharactersFacade.getColumns();
  }

  get selectedColumns(): ColumnDefinition [] {
    return this.swCharactersFacade.getSelectedColumns();
  }

  public checkElement(id: number) {
    console.log(id);
    this.swCharactersFacade.checkColumn(id);
  }

}
