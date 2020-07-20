import {Component, Vue} from "vue-property-decorator";
import DataTableComponent from "@/components/shared/DataTableComponent.vue";
import {SwCharacterModel} from "@/store/sw-characters/sw.character.model";
import {ColumnDefinition} from "@/components/shared/column-definition";
import swColumnDefinitionService from "@/services/sw-column-definition.service";
import {SwCharactersFacade} from "@/store/sw-characters/sw-characters.facade";

@Component({
  name: 'sw-characters',
  components: {'data-table': DataTableComponent},

})
export default class SwCharactersComponent extends Vue {

  private swCharactersFacade: SwCharactersFacade = new SwCharactersFacade();

  get characters(): SwCharacterModel[] {
    return this.swCharactersFacade.getAllSwCharacters();
  }

  private columnDefs!: ColumnDefinition [];

  beforeMount() {
    swColumnDefinitionService.getColumnDefinition()
      .subscribe(cd => this.columnDefs = cd);

    this.swCharactersFacade.fetchAllSwCharacters();
  }
}
