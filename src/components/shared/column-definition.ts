export interface ColumnDefinition {
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
}
