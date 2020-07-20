import {SwCharacterMutations} from "@/store/sw-characters/mutations/sw-characters.mutations.model";
import {SwCharacterModel, SwCharacterState} from "@/store/sw-characters/sw.character.model";

export const mutations: SwCharacterMutations = {
  getAllSwCharacters(state: SwCharacterState, characters: SwCharacterModel[]) {
    state.characters = characters;
  }
};
