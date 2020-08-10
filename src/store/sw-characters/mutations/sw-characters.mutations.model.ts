import {MutationTree, Store} from "vuex";
import {ColumnDefinition, SwCharacterModel, SwCharacterState} from "@/store/sw-characters/sw.character.model";


export interface SwCharacterMutations extends MutationTree<SwCharacterState> {

  getAllSwCharacters(this: Store<SwCharacterState>, state: SwCharacterState, characters: SwCharacterModel[]): void;

  getColumns(this: Store<SwCharacterState>, state: SwCharacterState, columns: ColumnDefinition[]): void;

  checkColumn(state: SwCharacterState, id: number): void;
}

export const MUTATION_TYPES={
  getAllSwCharacterMutation: 'getAllSwCharacters',
  getColumnsMutation: 'getColumns',
  checkColumnMutation: 'checkColumn'
}

