import {Vue} from "vue-property-decorator";
import {swCharactersActions} from "@/store/sw-characters/actions/sw-characters.actions";
import {SwCharacterModel} from "@/store/sw-characters/sw.character.model";
import store from "@/store";
import {swCharactersStore} from "@/store/sw-characters/sw-characters.store";

export class SwCharactersFacade {

  public fetchAllSwCharacters() {
    store.dispatch(swCharactersActions);
  }

  public getAllSwCharacters(): SwCharacterModel [] {
    return swCharactersStore.state.characters;
  }
}

