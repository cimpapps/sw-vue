import {SwCharacterMutations} from "@/store/sw-characters/mutations/sw-characters.mutations.model";
import {ColumnDefinition, OpenItem, SwCharacterModel, SwCharacterState} from "@/store/sw-characters/sw.character.model";

export const mutations: SwCharacterMutations = {
  getAllSwCharacters(state: SwCharacterState, characters: SwCharacterModel[]) {
    state.characters = [
      {
        "skin_color": "fair",
        id:1,
        "name": "Luke Skywalker",
        "vehicles": [
          "http://swapi.dev/api/vehicles/14/",
          "http://swapi.dev/api/vehicles/30/"
        ],
        "species": [],
        "edited": "2014-12-20T21:17:56.891+0000",
        "birth_year": "19BBY",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "eye_color": "blue",
        "height": "172",
        "gender": "male",
        "mass": "77",
        "hair_color": "blond",
        "fullWidth": true

      },
      {
        "skin_color": "gold",
        id:2,
        "name": "C-3PO",
        "vehicles": [],
        "species": [
          "http://swapi.dev/api/species/2/"
        ],
        "edited": "2014-12-20T21:17:50.309+0000",
        "birth_year": "112BBY",
        "homeworld": "http://swapi.dev/api/planets/1/",

        "eye_color": "yellow",
        "height": "167",
        "gender": "n/a",
        "mass": "75",
        "hair_color": "n/a"
      },
      {
        "skin_color": "white, blue",
        "name": "R2-D2",
        id:3,
        "vehicles": [],
        "species": [
          "http://swapi.dev/api/species/2/"
        ],
        "edited": "2014-12-20T21:17:50.311+0000",
        "birth_year": "33BBY",
        "homeworld": "http://swapi.dev/api/planets/8/",
        "eye_color": "red",
        "height": "96",
        "gender": "n/a",
        "mass": "32",
        "hair_color": "n/a"
      },
      {
        "skin_color": "white",
        "name": "Darth Vader",
        id:3,
        "vehicles": [],
        "species": [],
        "edited": "2014-12-20T21:17:50.313+0000",
        "birth_year": "41.9BBY",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "eye_color": "yellow",
        "height": "202",
        "gender": "male",
        "mass": "136",
        "hair_color": "none"
      },
      {
        "skin_color": "light",
        "name": "Leia Organa",
        id:4,
        "vehicles": [
          "http://swapi.dev/api/vehicles/30/"
        ],
        "species": [],
        "edited": "2014-12-20T21:17:50.315+0000",
        "birth_year": "19BBY",
        "homeworld": "http://swapi.dev/api/planets/2/",
        "eye_color": "brown",
        "height": "150",
        "gender": "female",
        "mass": "49",
        "hair_color": "brown"
      },
      {
        "skin_color": "light",
        "name": "Owen Lars",
        id:5,
        "vehicles": [],
        "species": [],
        "edited": "2014-12-20T21:17:50.317+0000",
        "birth_year": "52BBY",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "eye_color": "blue",
        "height": "178",
        "gender": "male",
        "mass": "120",
        "hair_color": "brown, grey"
      },
      {
        "skin_color": "light",
        "name": "Beru Whitesun lars",
        id:6,
        "vehicles": [],
        "species": [],
        "edited": "2014-12-20T21:17:50.319+0000",
        "birth_year": "47BBY",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "eye_color": "blue",
        "height": "165",
        "gender": "female",
        "mass": "75",
        "hair_color": "brown"
      },
      {
        "skin_color": "white, red",
        "name": "R5-D4",
        id:7,
        "vehicles": [],
        "species": [
          "http://swapi.dev/api/species/2/"
        ],
        "edited": "2014-12-20T21:17:50.321+0000",
        "birth_year": "unknown",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "eye_color": "red",
        "height": "97",
        "gender": "n/a",
        "mass": "32",
        "hair_color": "n/a"
      },
      {
        "skin_color": "light",
        "name": "Biggs Darklighter",
        id:8,
        "vehicles": [],
        "species": [],
        "edited": "2014-12-20T21:17:50.323+0000",
        "birth_year": "24BBY",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "eye_color": "brown",
        "height": "183",
        "gender": "male",
        "mass": "84",
        "hair_color": "black"
      },
      {
        "skin_color": "fair",
        id:9,
        "name": "Obi-Wan Kenobi",
        "vehicles": [
          "http://swapi.dev/api/vehicles/38/"
        ],
        "species": [],
        "edited": "2014-12-20T21:17:50.325+0000",
        "birth_year": "57BBY",
        "homeworld": "http://swapi.dev/api/planets/20/",
        "eye_color": "blue-gray",
        "height": "182",
        "gender": "male",
        "mass": "77",
        "hair_color": "auburn, white"
      }
    ];
    state.rowData = state.characters
  },

  getColumns(state: SwCharacterState, columns: ColumnDefinition[]) {
    state.columns = columns;
    state.selectedColumns = columns.filter(col => !col.hidden);
  },


  checkColumn(state: SwCharacterState, id: number) {
    let column = state.columns.find(col => col.id === id);
    console.log(column);
    //debugger
    if (column!.hidden) {
      state.selectedColumns = [...state.selectedColumns, column!];
      console.log(state.selectedColumns, "column is hidden");
      // @ts-ignore
      state.columns = [... state.columns.filter(col => col.id !== id), {...column, hidden : column!.hidden? !(column.hidden) : false}]
    } else {
      state.selectedColumns = state.selectedColumns.filter(col => col.id !== id);
      console.log(state.selectedColumns, "column is visible");
      // @ts-ignore
      state.columns = [... state.columns.filter(col => col.id !== id), {...column, hidden: true}]

    }


  },

  rowSelected(state: SwCharacterState, id: number) {
    const initialElements = state.characters;

    const newState : any[]= []

    const openItem : OpenItem = {
      id: id+1,
      fullWidth: true
    };

    initialElements.forEach(elem => {
      if(elem.id +1 === id +1){
        openItem.id = id
        newState.push(openItem)
      }else if(elem.id < id){
        newState.push(elem)
      }else {
        newState.push({...elem, id: elem.id +1})
      }
    })

    state.rowData = newState;
    state.openedItem = {
      //backend values
    }
  }
};
