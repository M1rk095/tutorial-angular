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
  
  mapHeaders = new Map<string, string>([
        ["NOMINATIVO", "nominativoCliente"],
        ["NDG", "ndgCliente"],
        ["BUSINESS UNIT", "businessUnit"],
        ["CTV AMMINISTRATO", "ctvAmministrato"],
        ["CTV ASSICURATO", "ctvAssicurativo"],
        ["CTV DIRETTO","ctvDiretto"],
        ["CTV GESTITO", "ctvGestito"],
        ["CTV TOTALE", "ctvTotale"]
    ]);
    
  orderColumn: any = "normale";
  orderColumnFlag: any = 0;
  columnToOrder: any = "";

  
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
        if(this.orderColumn == "normale"){
          ;
        }else if (this.orderColumn == "crescente"){
          console.log(this.columnToOrder);
          switch (this.columnToOrder) {     
              case "ndgCliente":
                  resp.sort(function(a:any, b:any){
                    if(a.ndgCliente < b.ndgCliente) { return -1; }
                    if(a.ndgCliente > b.ndgCliente) { return 1; }
                    return 0;
                  })
                  break;
              case "businessUnit":
                resp.sort(function(a:any, b:any){
                  if(a.businessUnit < b.businessUnit) { return -1; }
                  if(a.businessUnit > b.businessUnit) { return 1; }
                  return 0;
                })
                break;
              case "ctvAmministrato":
                resp.sort(function(a:any, b:any){
                  if(a.ctvAmministrato < b.ctvAmministrato) { return -1; }
                  if(a.ctvAmministrato > b.ctvAmministrato) { return 1; }
                  return 0;
                })
                break;
              case "ctvAssicurativo":
                resp.sort(function(a:any, b:any){
                  if(a.ctvAssicurativo < b.ctvAssicurativo) { return -1; }
                  if(a.ctvAssicurativo > b.ctvAssicurativo) { return 1; }
                  return 0;
                })
                break;
              case "ctvDiretto":
                resp.sort(function(a:any, b:any){
                  if(a.ctvDiretto < b.ctvDiretto) { return -1; }
                  if(a.ctvDiretto > b.ctvDiretto) { return 1; }
                  return 0;
                })
                break;
              case "ctvGestito":
                resp.sort(function(a:any, b:any){
                  if(a.ctvGestito < b.ctvGestito) { return -1; }
                  if(a.ctvGestito > b.ctvGestito) { return 1; }
                  return 0;
                })
                break;
              case "ctvTotale":
                resp.sort(function(a:any, b:any){
                  if(a.ctvTotale < b.ctvTotale) { return -1; }
                  if(a.ctvTotale > b.ctvTotale) { return 1; }
                  return 0;
                })
                break;
              default:
                  console.log("Error");
                  break;
          }
        }else if (this.orderColumn == "decrescente"){
          console.log(this.columnToOrder);
          switch (this.columnToOrder) {     
              case "ndgCliente":
                  resp.sort(function(a:any, b:any){
                    if(a.ndgCliente > b.ndgCliente) { return -1; }
                    if(a.ndgCliente < b.ndgCliente) { return 1; }
                    return 0;
                  })
                  break;
              case "businessUnit":
                resp.sort(function(a:any, b:any){
                  if(a.businessUnit > b.businessUnit) { return -1; }
                  if(a.businessUnit < b.businessUnit) { return 1; }
                  return 0;
                })
                break;
              case "ctvAmministrato":
                resp.sort(function(a:any, b:any){
                  if(a.ctvAmministrato > b.ctvAmministrato) { return -1; }
                  if(a.ctvAmministrato < b.ctvAmministrato) { return 1; }
                  return 0;
                })
                break;
              case "ctvAssicurativo":
                resp.sort(function(a:any, b:any){
                  if(a.ctvAssicurativo > b.ctvAssicurativo) { return -1; }
                  if(a.ctvAssicurativo < b.ctvAssicurativo) { return 1; }
                  return 0;
                })
                break;
              case "ctvDiretto":
                resp.sort(function(a:any, b:any){
                  if(a.ctvDiretto > b.ctvDiretto) { return -1; }
                  if(a.ctvDiretto < b.ctvDiretto) { return 1; }
                  return 0;
                })
                break;
              case "ctvGestito":
                resp.sort(function(a:any, b:any){
                  if(a.ctvGestito > b.ctvGestito) { return -1; }
                  if(a.ctvGestito < b.ctvGestito) { return 1; }
                  return 0;
                })
                break;
              case "ctvTotale":
                resp.sort(function(a:any, b:any){
                  if(a.ctvTotale > b.ctvTotale) { return -1; }
                  if(a.ctvTotale < b.ctvTotale) { return 1; }
                  return 0;
                })
                break;
              default:
                  console.log("Error");
                  break;
          }
        }

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
    console.log(colonnaInfo);
    console.log(this.mapHeaders.get(colonnaInfo[0]));
    this.columnToOrder = this.mapHeaders.get(colonnaInfo[0]);
    this.orderColumn = colonnaInfo[1];
    this.ngOnInit();
    
  }

}
