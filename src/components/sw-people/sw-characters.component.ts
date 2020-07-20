import {Component, Vue} from "vue-property-decorator";
import DataTableComponent from "@/components/shared/DataTableComponent.vue";
import {SwCharacterModel} from "@/store/sw-characters/sw.character.model";
import {ColumnDefinition} from "@/components/shared/column-definition";
import swColumnDefinitionService from "@/services/sw-column-definition.service";
import swApiService from "@/services/sw-api.service";
import {swCharactersActions} from "@/store/sw-characters/actions/sw-characters.actions";

@Component({
  name: 'sw-characters',
  components: {'data-table': DataTableComponent}
})
export default class SwCharactersComponent extends Vue {

  private characters: SwCharacterModel[] = [];
  private columnDefs!: ColumnDefinition [];

  beforeMount() {
    swColumnDefinitionService.getColumnDefinition()
      .subscribe(cd => this.columnDefs = cd);

    this.characters = this.$store.state.swCharactersStore.characters;
    this.$store.dispatch(swCharactersActions);
  }
}
