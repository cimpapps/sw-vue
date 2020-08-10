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
      colId: 1,
      headerName: 'Name', field: 'name', filter: true, sortable: true, checkboxSelection: true, resizable: true,
      flex: 1,
      minWidth: 120,
      pinned: 'left',
      lockPinned: true,
      hide: false

    },
    {
      colId: 2,
      headerName: 'Skin Color',
      field: 'skin_color',
      filter: true,
      sortable: true,
      resizable: true,
      flex: 1,
      minWidth: 100,
      autoHeight: true,
      hide: false,
      floatingFilter: true
    },
    {
      colId: 3,
      headerName: 'Birth Year',
      field: 'birth_year',
      filter: true,
      sortable: true,

      resizable: true,
      flex: 1,
      minWidth: 120,
      lockPinned: true,
      hide: false
    },
    {
      colId: 4,
      headerName: 'Height', field: 'height', filter: true, sortable: true, resizable: true,
      flex: 1,
      minWidth: 120,
      rowDrag: true,
    floatingFilter : true,
      hide: false
    },
    {
      colId: 6,
      headerName: 'Height', field: 'height', filter: true, sortable: true, resizable: true,
      flex: 1,
      minWidth: 120,
      rowDrag: true,
      floatingFilter : true,
      hide: false
    },
    {
      colId: 7,
      headerName: 'Height', field: 'height', filter: true, sortable: true, resizable: true,
      flex: 1,
      minWidth: 120,
      rowDrag: true,
      floatingFilter : true,
      hide: false
    },{
      colId: 9,
      headerName: 'Height', field: 'height', filter: true, sortable: true, resizable: true,
      flex: 1,
      minWidth: 120,
      rowDrag: true,
      floatingFilter : true,
      hide: false,
    },
    {
      colId: 5,
      headerName: '+',
      field: 'homeworld',
      resizable: false,
      flex: 1,
      maxWidth: 40,
      autoHeight: true,
      rowDrag: true,
      hide: false,
      pinned: 'right',
    }
  ]

}

const swColumnDefinitionService = new SwColumnDefinitionService();
export default swColumnDefinitionService;
