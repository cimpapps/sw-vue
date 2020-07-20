import {SwCharacterModel} from "@/store/sw-characters/sw.character.model";
import {Vue} from "vue-property-decorator";
import {Observable, from, pipe} from "rxjs";
import {map} from "rxjs/operators";

import axios from "axios";

export class SwApiService {

  public getSwCharacthers(): Observable<SwCharacterModel []> {
    const promise = axios.get("http://localhost:8989");
    return from(promise)
      .pipe(
        map(response => response.data as SwCharacterModel[])
      );
  }

}
const swApiService = new SwApiService();
export default swApiService;
