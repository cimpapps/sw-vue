import Vuex from "vuex";
import {SwCharacterState} from "@/store/sw-characters/sw.character.model";
import {getters} from "@/store/sw-characters/getters/sw-characters.getters";
import {mutations} from "@/store/sw-characters/mutations/sw-characters.mutations";
import {actions} from "@/store/sw-characters/actions/sw-characters.actions";

export const swCharactersStore = {
  state: {
    characters: []
  },
  getters,
  mutations,
  actions
}
