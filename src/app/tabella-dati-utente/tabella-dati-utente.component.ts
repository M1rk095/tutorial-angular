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
  mapHeaders : any = {
    "Nominativo" : "nominativoCliente",
    "NDG" : "ndgCliente",
  };
  

  
  elemPerPage: any = 10;
  menu: any = [];
  dataSourceLength: any;
  currentPage: any = 1;
  lengthMenu: any;
  arrayTemp: any;
  tempStart: any = 0;
  tempEnd: any = 10;


  constructor(private tabellaService:TabellaService) { }

  ngOnInit(): void {
    this.getData();

  }

  getData(){
    this.tabellaService.getData().subscribe(
      (resp: any) => {   
        resp.sort(function(a:any, b:any){
          if(a.nominativoCliente < b.nominativoCliente) { return -1; }
          if(a.nominativoCliente > b.nominativoCliente) { return 1; }
          return 0;
        })
        this.arrayTemp = resp.slice(this.tempStart, this.tempEnd);
        this.rows = this.arrayTemp;
        this.dataSourceLength = resp.length;
        this.lengthMenu = Math.ceil(this.dataSourceLength/this.elemPerPage);
        for (let i = 1; i <= this.lengthMenu; i++) {
          this.menu[i] = i;
        }
      });
  }

  changeCurrentPage(newCurrentPage: any) {
    this.currentPage = newCurrentPage;
    this.tempStart = (newCurrentPage * this.elemPerPage) - 10;
    this.tempEnd = (newCurrentPage * this.elemPerPage);
    this.ngOnInit();
    console.log("currentPage");
  }

  ordinaColonna(colonnaInfo: any){
    
     

    this.ngOnInit();
    console.log(colonnaInfo);
  }

}
