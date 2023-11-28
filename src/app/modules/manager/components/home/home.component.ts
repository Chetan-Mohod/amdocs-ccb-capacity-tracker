import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MyCellComponent } from '../my-cell/my-cell.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ExtraComponent } from '../extra/extra.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  dropdownList:any = [];
  selectedItems:any= [];
  dropdownSettings: IDropdownSettings= {};

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];

    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },   
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'make', cellRenderer: MyCellComponent},
    { field: 'model'},
    { field: 'price' }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient, public dialog: MatDialog) {


  }
  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  clearFilter(): void {
    this.agGrid.api.setFilterModel(null);
  } 


 /* openDialog() {
    const dialogRef = this.dialog.open(ExtraComponent, {
      height: '533px',
      width: '1100px',
    });
//*/
    openDialog() {
      const dialogRef = this.dialog.open(ExtraComponent, {
        height: '633px',
        width: '1300px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
