import {ActionContext, ActionTree, Store} from "vuex";
import {SwCharacterState} from "@/store/sw-characters/sw.character.model";

export interface SwCharactersActions extends ActionTree<SwCharacterState, SwCharacterState>{

  getAllSwCharacters(this: Store<SwCharacterState>, context: Context): void;

}

export type Context = ActionContext<SwCharacterState, SwCharacterState>
