import {Context, SwCharactersActions} from "@/store/sw-characters/actions/sw-characters.actions.model";
import swApiService from "@/services/sw-api.service";
import swColumnDefinitionService from "@/services/sw-column-definition.service";
import {MUTATION_TYPES} from "@/store/sw-characters/mutations/sw-characters.mutations.model";


export const actions: SwCharactersActions = {
  fetchAllSwCharacters(context: Context) {
    swApiService.getSwCharacthers()
      .subscribe(characters => {
        context.commit(MUTATION_TYPES.getAllSwCharacterMutation, characters);
      });
  },

  fetchColumns(context: Context) {
    swColumnDefinitionService.getColumnDefinitions()
      .subscribe(columns => {
        context.commit(MUTATION_TYPES.getColumnsMutation, columns);
      })
  },

  checkColumn(context: Context, id: number) {
    context.commit(MUTATION_TYPES.checkColumnMutation, id);
  }
}
