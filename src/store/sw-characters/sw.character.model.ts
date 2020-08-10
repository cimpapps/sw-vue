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

export interface ColumnDefinition {
  id: number;
  headerName: string;
  field: string;
  filter?: boolean;
  sortable?: boolean
  checkboxSelection?: boolean;
  resizable?: boolean;
  flex?: number;
  minWidth?: number;
  searchable?: boolean;
  lockPinned?: boolean;
  pinned?: string;
  autoHeight?: boolean;
  chartDataType?: string | 'category' | 'series' | 'excluded';
  rowDrag?: boolean;
  hidden: boolean;
}

export interface SwCharacterState {
  characters: SwCharacterModel [];
  columns: ColumnDefinition [];
  selectedColumns: ColumnDefinition[];

}



