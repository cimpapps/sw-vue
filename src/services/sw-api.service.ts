import {Character} from "@/components/sw-people/character";
import {Vue} from "vue-property-decorator";
import {Observable, from, pipe} from "rxjs";
import {map} from "rxjs/operators";



export class SwApiService extends Vue{

  getSwCharacthers(): Observable<Character []> {
    const promise = this.axios.get("http://localhost:8989");
    return from(promise)
      .pipe(
        map(response => response.data as Character[])
      );
  }

}
const swApiService = new SwApiService();
export default swApiService;
