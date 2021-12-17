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
 

}

 /* @Input() elemPerPage. (numero di elementi per pagina da mostrare)

@Input() dataSourceLength (numero totale di elementi)

@Input() currentPage (pagina corrente)

@Output() changePage = new EventEmitter(); (evento che emette il cambiamento di pagina)*/