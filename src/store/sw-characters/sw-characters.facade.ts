import {ColumnDefinition, SwCharacterModel} from "@/store/sw-characters/sw.character.model";
import store from "@/store";
import {swCharactersStore} from "@/store/sw-characters/sw-characters.store";
import {ACTION_TYPES} from "@/store/sw-characters/actions/sw-characters.actions.model";

export class SwCharactersFacade {

  public fetchAllSwCharacters() {
    store.dispatch(ACTION_TYPES.swCharactersActions);
  }

  public fetchColumns() {
    store.dispatch(ACTION_TYPES.fetchColumnsAction)
  }

  public getAllSwCharacters(): SwCharacterModel [] {
    return swCharactersStore.state.characters;
  }

  public getColumns(): ColumnDefinition [] {
    return swCharactersStore.state.columns;
  }

  public checkColumn(id: number) {
    store.dispatch(ACTION_TYPES.checkColumnAction, id);
  }

}

