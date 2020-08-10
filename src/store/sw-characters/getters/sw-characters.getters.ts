import {
  ColumnDefinition,
  SwCharacterModel,
  SwCharacterState
} from "@/store/sw-characters/sw.character.model";
import {SwCharactersGetters} from "@/store/sw-characters/getters/sw-characters.getters.model";


export const getters: SwCharactersGetters = {
  getAllSwCharacters(state: SwCharacterState): SwCharacterModel[] {

    return state.rowData;
  },

  getColumns(state: SwCharacterState): ColumnDefinition[] {
    return state.columns;
  },


}

