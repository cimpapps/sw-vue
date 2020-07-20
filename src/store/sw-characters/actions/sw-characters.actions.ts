import {Context, SwCharactersActions} from "@/store/sw-characters/actions/sw-characters.actions.model";
import swApiService from "@/services/sw-api.service";
import {getAllSwCharacterMutation} from "@/store/sw-characters/mutations/sw-characters.mutations.model";



export const actions: SwCharactersActions = {
  getAllSwCharacters(context: Context) {
    swApiService.getSwCharacthers()
      .subscribe(characters => {
          return context.commit(getAllSwCharacterMutation, characters)

      });
  }
}

export const swCharactersActions = 'getAllSwCharacters';
