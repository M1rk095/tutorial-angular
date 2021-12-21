import { Component, OnInit } from '@angular/core';
import { TabellaService } from '../tabella.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabella-dati-utente',
  templateUrl: './tabella-dati-utente.component.html',
  styleUrls: ['./tabella-dati-utente.component.scss']
})
export class TabellaDatiUtenteComponent implements OnInit {

  rows: any = [];
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

    nominativo: any;
    ndgMin: any = -9999999;
    ndgMax: any = 99999999999;
    businessUnitMin: any = -9999999
    businessUnitMax: any = 999999999999;
    ctvAmministrativoMin: any = -9999999
    ctvAmministrativoMax: any = 999999999999;
    ctvAssicuratoMin: any = -9999999
    ctvAssicuratoMax: any = 999999999999;
    ctvDirettoMin: any = -9999999
    ctvDirettoMax: any = 999999999999;
    ctvGestitoMin: any = -9999999
    ctvGestitoMax: any = 999999999999;
    ctvTotaleMin: any = -9999999
    ctvTotaleMax: any = 999999999999;


    
  orderColumn: any = "normale";
  orderColumnFlag: any = 0;
  columnToOrder: any = "";

  
  elemPerPage: any = 10;
  menu: any = [];
  dataSourceLength: any;
  currentPage: any = 1;
  lengthMenu: any;
  arrayTemp: any = [];
  tempStart: any = 0;
  tempEnd: any = 10;

  filterForm: any;

  constructor(private tabellaService:TabellaService) { }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      nominativo: new FormControl(''),
      ndgMin: new FormControl(0),
      ndgMax: new FormControl(999999999),
      businessUnitMin: new FormControl(0),
      businessUnitMax: new FormControl(999999999),
      ctvAmministrativoMin: new FormControl(0),
      ctvAmministrativoMax: new FormControl(999999999),
      ctvAssicuratoMin: new FormControl(0),
      ctvAssicuratoMax: new FormControl(999999999),
      ctvDirettoMin: new FormControl(0),
      ctvDirettoMax: new FormControl(999999999),
      ctvGestitoMin: new FormControl(0),
      ctvGestitoMax: new FormControl(999999999),
      ctvTotaleMin: new FormControl(0),
      ctvTotaleMax: new FormControl(999999999),
  });
    this.getData();

  }

  getData(){
    this.tabellaService.getData().subscribe(
      (resp: any) => {  
        
        
        for(let i = 0; i < resp.length; i++){
          if(this.ndgMin > resp[i].ndgCliente || this.ndgMax < resp[i].ndgCliente || 
            this.businessUnitMin > resp[i].businessUnit || this.businessUnitMax < resp[i].businessUnit ||
            this.ctvGestitoMin > resp[i].ctvGestito || this.ctvGestitoMax < resp[i].ctvGestito ||
            this.ctvAmministrativoMin > resp[i].ctvAmministrativo || 
            this.ctvAmministrativoMax < resp[i].ctvAmministrativo ||
            this.ctvAssicuratoMin > resp[i].ctvctvAssicurativo ||
            this.ctvAssicuratoMax < resp[i].ctvAssicurativo ||
            this.ctvDirettoMin > resp[i].ctvDiretto || this.ctvDirettoMax < resp[i].ctvDiretto ||
            this.ctvTotaleMin > resp[i].ctvTotale || this.ctvTotaleMax < resp[i].ctvTotale){
              resp.splice(i,1);
              i--;
          }
       }

        resp.sort(function(a:any, b:any){
          if(a.nominativoCliente < b.nominativoCliente) { return -1; }
          if(a.nominativoCliente > b.nominativoCliente) { return 1; }
          return 0;
        })
        resp.sort(function(a:any, b:any){
          if(a.nominativoCliente < b.nominativoCliente) { return -1; }
          if(a.nominativoCliente > b.nominativoCliente) { return 1; }
          return 0;
        })
        if(this.orderColumn == "normale"){
          this.orderColumnFlag = 0;
        }else if (this.orderColumn == "crescente"){
          this.orderColumnFlag = 1;
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
          this.orderColumnFlag = 2;
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

  getFilter(newFilter: any) {
    this.nominativo = newFilter.nominativo;
    this.ndgMin = newFilter.ndgMin;
    this.ndgMax = newFilter.ndgMax;
    this.businessUnitMin = newFilter.businessUnitMin;
    this.businessUnitMax = newFilter.businessUnitMax;
    this.ctvAmministrativoMin = newFilter.ctvAmministrativoMin;
    this.ctvAmministrativoMax = newFilter.ctvAmministrativoMax;
    this.ctvAssicuratoMin = newFilter.ctvAssicuratoMin;
    this.ctvAssicuratoMax = newFilter.ctvAssicuratoMax;
    this.ctvDirettoMin = newFilter.ctvDirettoMin;
    this.ctvDirettoMax = newFilter.ctvDirettoMax;
    this.ctvGestitoMin = newFilter.ctvGestitoMin;
    this.ctvGestitoMax = newFilter.ctvGestitoMax;
    this.ctvTotaleMin = newFilter.ctvTotaleMin;
    this.ctvTotaleMax = newFilter.ctvTotaleMax;
    this.ngOnInit();
    
  }

  clear(clearString:any){

    this.nominativo = "";
    this.ndgMin = 0;
    this.ndgMax = 999999999;
    this.businessUnitMin = 0;
    this.businessUnitMax = 999999999;
    this.ctvAmministrativoMin = 0;
    this.ctvAmministrativoMax = 999999999;
    this.ctvAssicuratoMin = 0;
    this.ctvAssicuratoMax = 999999999;
    this.ctvDirettoMin = 0;
    this.ctvDirettoMax = 999999999;
    this.ctvGestitoMin = 0;
    this.ctvGestitoMax = 999999999;
    this.ctvTotaleMin = 0;
    this.ctvTotaleMax = 999999999;
    this.ngOnInit();
}



  
}
