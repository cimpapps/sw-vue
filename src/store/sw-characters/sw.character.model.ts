import {GetterTree, MutationTree, Store} from "vuex";

export interface SwCharacterModel {
  name: string;
  skin_color: string;
  vehicles: any [];
  species: any [];
  edited: string;
  birth_year: string;
  homeworld: string;
  eye_color: string;
  height: string;
  gender: string;
  mass: string;
  hair_color: string;
}

export interface SwCharacterState {
  characters: SwCharacterModel [];
}

