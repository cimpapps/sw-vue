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
    debugger
    if (column!.hidden) {
      state.selectedColumns = [...state.selectedColumns, column!];
      console.log(state.selectedColumns, "column is hidden");
      state.columns = [... state.columns.filter(col => col.id !== id), {...column, hidden : false}]
    } else {
      state.selectedColumns = state.selectedColumns.filter(col => col.id !== id);
      console.log(state.selectedColumns, "column is visible");
      state.columns = [... state.columns.filter(col => col.id !== id), {...column, hidden: true}]

    }


  }
};
