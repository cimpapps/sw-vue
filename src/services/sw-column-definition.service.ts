import {ColumnDefinition} from "@/components/shared/column-definition";
import {Observable, of} from "rxjs";

export class SwColumnDefinitionService {


  public getColumnDefinition(): Observable<ColumnDefinition[]> {
    return of(
      this.COLUMN_DEFS
    );
  }

  private COLUMN_DEFS = [
    {
      headerName: 'Name', field: 'name', filter: true, sortable: true, checkboxSelection: true, resizable: true,
      flex: 1,
      minWidth: 120,
      pinned: 'left',
      lockPinned: true

    },
    {
      headerName: 'Skin Color',
      field: 'skin_color',
      filter: true,
      sortable: true,
      resizable: true,
      searchable: true,
      flex: 1,
      minWidth: 100,
      autoHeight: true
    },
    {
      headerName: 'Birth Year',
      field: 'birth_year',
      filter: true,
      sortable: true,

      resizable: true,
      flex: 1,
      minWidth: 120,
      lockPinned: true
    },
    {
      headerName: 'Height', field: 'height', filter: true, sortable: true, resizable: true,
      flex: 1,
      minWidth: 120,
      rowDrag: true
    },
    {
      headerName: 'Home World',
      field: 'homeworld',
      filter: true,
      sortable: true,
      resizable: true,
      flex: 1,
      minWidth: 270,
      autoHeight: true,
      rowDrag: true
    }
  ]

}

const swColumnDefinitionService = new SwColumnDefinitionService();
export default swColumnDefinitionService;
