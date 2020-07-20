import {SwCharacterMutations} from "@/store/sw-characters/mutations/sw-characters.mutations.model";
import {ColumnDefinition, SwCharacterModel, SwCharacterState} from "@/store/sw-characters/sw.character.model";

export const mutations: SwCharacterMutations = {
  getAllSwCharacters(state: SwCharacterState, characters: SwCharacterModel[]) {
    state.characters = characters;
  },

  getColumns(state: SwCharacterState, columns: ColumnDefinition[]) {
    state.columns = columns;
    state.selectedColumns = columns.filter(col => !col.hidden);
  },


  checkColumn(state: SwCharacterState, id: number) {
    let column = state.columns.find(col => col.id === id);
    console.log(column);
    column!.hidden = !column!.hidden;
  }
};
