import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {


  @Input()
  data!: any[];

  @Output()
  onDeleteItem: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onChangeItem: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onInfoItem: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onSort: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onSearch: EventEmitter<any> = new EventEmitter<any>();

  columns: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data']?.currentValue && changes['data']?.currentValue.length){
      const col = Object.keys(this.data[0]);
      this.columns = col.map(e=> ({name: e, sort: 'ASC'}));
    }
  }

  onDeleteRow(value:any){
    this.onDeleteItem.emit(value);
  }

  onEditRow(value:any){
    this.onChangeItem.emit(value);
  }

  onInfoRow(value:any){
    this.onInfoItem.emit(value);
  }

  onSortColumn(column: any){
    if(column.sort === "ASC"){
      column.sort = "DESC";
    }else{
      column.sort = "ASC";
    }

    this.columns = this.columns.map(e => e.name === column.name ? { ...e, sort: column.sort } : e);

    this.onSort.emit(column);
  }

  onSearchRow(value : any){
    this.onSearch.emit(value)
  }


}
