import { Component, Input, Output, OnInit } from '@angular/core';
import { TabellaService } from '../tabella.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.scss']
})
export class TabellaComponent implements OnInit {

  @Input() rows: any;
  @Input() headers: any;
  @Input() indexHeaders: any;
  @Input() menu: any;
  @Input() dataSourceLength: any;
  @Input() currentPage: any;

  @Output() changePage = new EventEmitter();

  constructor(private tabellaService:TabellaService) { }

  ngOnInit(): void {
    
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

}

 /* @Input() elemPerPage. (numero di elementi per pagina da mostrare)

@Input() dataSourceLength (numero totale di elementi)

@Input() currentPage (pagina corrente)

@Output() changePage = new EventEmitter(); (evento che emette il cambiamento di pagina)*/