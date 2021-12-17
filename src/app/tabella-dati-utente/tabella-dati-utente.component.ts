import { Component, OnInit } from '@angular/core';
import { TabellaService } from '../tabella.service';

@Component({
  selector: 'app-tabella-dati-utente',
  templateUrl: './tabella-dati-utente.component.html',
  styleUrls: ['./tabella-dati-utente.component.scss']
})
export class TabellaDatiUtenteComponent implements OnInit {

  rows: any;
  headers = ["NOMINATIVO", "NDG", "BUSINESS UNIT", "CTV AMMINISTRATO", 
    "CTV ASSICURATO", "CTV DIRETTO", "CTV GESTITO", "CTV TOTALE"];
  indexHeaders = ["nominativoCliente", "ndgCliente", "businessUnit", "ctvAmministrato", 
      "ctvAssicurativo", "ctvDiretto", "ctvGestito", "ctvTotale"];
  elemPerPage: any;
  menu: any = [];
  dataSourceLength: any;
  currentPage: any;
  lengthMenu: any;
  arrayTemp: any;

  constructor(private tabellaService:TabellaService) { }

  ngOnInit(): void {
    this.getData();

  }

  getData(){
    this.tabellaService.getData().subscribe(
      (resp: any) => {
        this.arrayTemp = resp;
        this.dataSourceLength = resp.length;
        this.currentPage = 1;
        this.elemPerPage = 10;
        this.rows = this.arrayTemp.slice(this.currentPage-1,this.elemPerPage);
        
        
        
        this.lengthMenu = Math.ceil(this.dataSourceLength/this.elemPerPage);
        for (let i = 1; i <= this.lengthMenu; i++) {
          this.menu[i] = i;
        }
        
      });
  }

  changeCurrentPage(newCurrentPage: any) {
    this.currentPage = newCurrentPage;
  }
}
