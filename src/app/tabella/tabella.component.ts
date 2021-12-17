import { Component, Input, OnInit } from '@angular/core';
import { TabellaService } from './tabella.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.scss']
})
export class TabellaComponent implements OnInit {

  rows: any;
  headers = ["NOMINATIVO", "NDG", "BUSINESS UNIT", "CTV AMMINISTRATO", 
    "CTV ASSICURATO", "CTV DIRETTO", "CTV GESTITO", "CTV TOTALE"];
  index = ["nominativoCliente", "ndgCliente", "businessUnit", "ctvAmministrato", 
      "ctvAssicurativo", "ctvDiretto", "ctvGestito", "ctvTotale"];

  constructor(private tabellaService:TabellaService) { }

  @Input() elemPerPage: any; 

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.tabellaService.getData().subscribe(
      (resp: any) => {this.rows = resp
        
      });
      console.log(this.rows);
  }

}

 /* @Input() elemPerPage. (numero di elementi per pagina da mostrare)

@Input() dataSourceLength (numero totale di elementi)

@Input() currentPage (pagina corrente)

@Output() changePage = new EventEmitter(); (evento che emette il cambiamento di pagina)*/