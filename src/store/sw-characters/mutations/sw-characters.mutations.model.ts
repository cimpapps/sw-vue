import {MutationTree, Store} from "vuex";
import {SwCharacterModel, SwCharacterState} from "@/store/sw-characters/sw.character.model";


export interface SwCharacterMutations extends MutationTree<SwCharacterState> {

  getAllSwCharacters(this: Store<SwCharacterState>, state: SwCharacterState, characters: SwCharacterModel[]): void;

}

export const getAllSwCharacterMutation = 'getAllSwCharacters';
