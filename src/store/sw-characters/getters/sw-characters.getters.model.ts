import {GetterTree, Store} from "vuex";
import {SwCharacterModel, SwCharacterState} from "@/store/sw-characters/sw.character.model";

export interface SwCharactersGetters extends GetterTree<SwCharacterState, SwCharacterState> {

  getAllSwCharacters(this: Store<SwCharacterState>, state: SwCharacterState): SwCharacterModel [];


}
