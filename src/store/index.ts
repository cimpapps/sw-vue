import Vue from "vue";
import Vuex from "vuex";
import {swCharactersStore} from "@/store/sw-characters/sw-characters.store";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    swCharactersStore
  }
});

export default store;
