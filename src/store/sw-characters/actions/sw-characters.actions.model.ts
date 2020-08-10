import {ActionContext, ActionTree, Store} from "vuex";
import {SwCharacterState} from "@/store/sw-characters/sw.character.model";

export interface SwCharactersActions extends ActionTree<SwCharacterState, SwCharacterState> {

  fetchAllSwCharacters(this: Store<SwCharacterState>, context: Context): void;

  fetchColumns(this: Store<SwCharacterState>, context: Context): void;

  checkColumn(this: Store<SwCharacterState>, context: Context, id: number): void;

  rowSelected(this: Store<SwCharacterState>, context: Context, id: number): void;
}

export type Context = ActionContext<SwCharacterState, SwCharacterState>

export const ACTION_TYPES = {
  swCharactersActions: 'fetchAllSwCharacters',
  fetchColumnsAction: 'fetchColumns',
  checkColumnAction: 'checkColumn',
  rowSelected : 'rowSelected'
}
