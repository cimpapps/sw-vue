import {Component, Vue} from "vue-property-decorator";
import DataTableComponent from "@/components/shared/DataTableComponent.vue";
import {Character} from "@/components/sw-people/character";
import {ColumnDefinition} from "@/components/shared/column-definition";
import swColumnDefinitionService from "@/services/sw-column-definition.service";
import swApiService from "@/services/sw-api.service";

@Component({
  name: 'sw-characters',
  components: {'data-table': DataTableComponent}
})
export default class SwCharactersComponent extends Vue {

  private characters: Character[] = [];
  private columnDefs!: ColumnDefinition [];

  beforeMount() {
    swColumnDefinitionService.getColumnDefinition()
      .subscribe(cd => this.columnDefs = cd);

    swApiService.getSwCharacthers()
      .subscribe(
        result => this.characters = result,
        err => console.error(err)
      );
  }
}
