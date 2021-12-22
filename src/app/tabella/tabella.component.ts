import { Component, Input, Output, OnInit} from '@angular/core';
import { TabellaService } from '../tabella.service';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewRowDialogComponent } from '../new-row-dialog/new-row-dialog.component';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.scss']
})
export class TabellaComponent implements OnInit {

  flag: any = "normale";
  flagClear: any = "";
  selectedColumn: any = "";

  @Input() rows: any;
  @Input() headers: any;
  @Input() indexHeaders: any;
  @Input() menu: any;
  @Input() dataSourceLength: any;
  @Input() currentPage: any;
  @Input() orderColumnFlag: any;
  @Input() filterForm: any;

  @Output() changePage = new EventEmitter();
  @Output() newOrdinaColonna= new EventEmitter();
  @Output() newFilter = new EventEmitter();
  @Output() clearForm = new EventEmitter();
  
  constructor(private tabellaService:TabellaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(NewRowDialogComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log("son qui");
      console.log(res);
    });
  }

  selectedCurrentPage?: any;
  onSelect(newCurrentPage: any): void {
    this.selectedCurrentPage = newCurrentPage;
    console.log(this.selectedCurrentPage);
    this.changePage.emit(this.selectedCurrentPage);
  }
 
  goBack(){
    if(this.currentPage === 1){
      ;
    }else{
      this.currentPage -= 1;
      this.changePage.emit(this.currentPage);
      console.log(this.currentPage);
    }
  }

  goForward(){
    if(this.currentPage === this.menu.length - 1){
      console.log(this.menu.length);
      ;
    }else{
      this.currentPage += 1;
      this.changePage.emit(this.currentPage);
      console.log(this.currentPage);
    }
  }

  ordina(titolo: any){
    this.selectedColumn = titolo;
    if(this.flag == "normale"){
      this.flag = "crescente";
    }else if(this.flag == "crescente"){
      this.flag = "decrescente";
    }else if(this.flag == "decrescente"){
      this.flag = "normale";
    }
    this.newOrdinaColonna.emit([this.selectedColumn, this.flag]);
  }

  onSubmit() {
    if(this.flagClear =="clear"){
      this.flagClear = "";
      this.filterForm.reset();
      this.newFilter.emit(this.filterForm.value); 
    }else{
      this.newFilter.emit(this.filterForm.value);
      console.log(this.filterForm);
    }
    
  }

  clear(){
    this.flagClear = "clear";
  }

  aggiungiRiga(){
    console.log("aggiungi riga");
  }

}

