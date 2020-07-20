import {Observable, of} from "rxjs";
import {ColumnDefinition} from "@/store/sw-characters/sw.character.model";

export class SwColumnDefinitionService {


  public getColumnDefinitions(): Observable<ColumnDefinition[]> {
    return of(
      this.COLUMN_DEFS
    );
  }

  private COLUMN_DEFS = [
    {
      id: 1,
      headerName: 'Name', field: 'name', filter: true, sortable: true, checkboxSelection: true, resizable: true,
      flex: 1,
      minWidth: 120,
      pinned: 'left',
      lockPinned: true,
      hidden: false

    },
    {
      id: 2,
      headerName: 'Skin Color',
      field: 'skin_color',
      filter: true,
      sortable: true,
      resizable: true,
      searchable: true,
      flex: 1,
      minWidth: 100,
      autoHeight: true,
      hidden: false
    },
    {
      id: 3,
      headerName: 'Birth Year',
      field: 'birth_year',
      filter: true,
      sortable: true,

      resizable: true,
      flex: 1,
      minWidth: 120,
      lockPinned: true,
      hidden: false
    },
    {
      id: 4,
      headerName: 'Height', field: 'height', filter: true, sortable: true, resizable: true,
      flex: 1,
      minWidth: 120,
      rowDrag: true,
      hidden: false
    },
    {
      id: 5,
      headerName: 'Home World',
      field: 'homeworld',
      filter: true,
      sortable: true,
      resizable: true,
      flex: 1,
      minWidth: 270,
      autoHeight: true,
      rowDrag: true,
      hidden: true
    }
  ]

}

const swColumnDefinitionService = new SwColumnDefinitionService();
export default swColumnDefinitionService;
