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
    ndgMin: any;
    ndgMax: any;
    businessUnitMin: any;
    businessUnitMax: any;
    ctvAmministrativoMin: any;
    ctvAmministrativoMax: any;
    ctvAssicuratoMin: any;
    ctvAssicuratoMax: any;
    ctvDirettoMin: any;
    ctvDirettoMax: any;
    ctvGestitoMin: any;
    ctvGestitoMax: any;
    ctvTotaleMin: any;
    ctvTotaleMax: any;
    numElem: any;


    
  orderColumn: any = "normale";
  orderColumnFlag: any = 0;
  columnToOrder: any = "";

  
  elemPerPage: any = 10;
  menu: any = [];
  dataSourceLength: any;
  currentPage: any = 1;
  lengthMenu: any;
  arrayTemp: any = [];
  arrayTemp2: any = [];
  tempStart: any = 0;
  tempEnd: any = this.elemPerPage;

  filterForm = new FormGroup({
    nominativo: new FormControl(),
    ndgMin: new FormControl(),
    ndgMax: new FormControl(),
    businessUnitMin: new FormControl(),
    businessUnitMax: new FormControl(),
    ctvAmministrativoMin: new FormControl(),
    ctvAmministrativoMax: new FormControl(),
    ctvAssicuratoMin: new FormControl(),
    ctvAssicuratoMax: new FormControl(),
    ctvDirettoMin: new FormControl(),
    ctvDirettoMax: new FormControl(),
    ctvGestitoMin: new FormControl(),
    ctvGestitoMax: new FormControl(),
    ctvTotaleMin: new FormControl(),
    ctvTotaleMax: new FormControl(),
    numElem: new FormControl()
});

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
        this.arrayTemp = resp;
        if(this.nominativo != null){
          this.arrayTemp = resp.filter(
            (row: any) => row.nominativoCliente.includes(this.nominativo)
            
          );
          
        }
        if(this.ndgMin != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(row.ndgCliente, this.ndgMin)
          );
        }
        if(this.ndgMax != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(this.ndgMax, row.ndgCliente)
          );
        }
        if(this.businessUnitMin != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(row.businessUnit, this.businessUnitMin)
          );
        }
        if(this.businessUnitMax != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(this.businessUnitMax, row.businessUnit)
          );
        }
        if(this.ctvGestitoMin != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(row.ctvGestito, this.ctvGestitoMin)
          );
        }
        if(this.ctvGestitoMax != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(this.ctvGestitoMax, row.ctvGestito)
          );
        }
        if(this.ctvAmministrativoMin != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(row.ctvAmministrato, this.ctvAmministrativoMin)
          );
        }
        if(this.ctvAmministrativoMax != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(this.ctvAmministrativoMax, row.ctvAmministrato)
          );
        }
        if(this.ctvAssicuratoMin!= null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(row.ctvAssicurativo, this.ctvAssicuratoMin)
          );
        }
        if(this.ctvAssicuratoMax != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(this.ctvAssicuratoMax, row.ctvAssicurativo)
          );
        }
        if(this.ctvDirettoMin != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(row.ctvDiretto, this.ctvDirettoMin)
          );
        }
        if(this.ctvDirettoMax != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(this.ctvDirettoMax, row.ctvDiretto)
          );
        }
        if(this.ctvTotaleMin != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(row.ctvTotale, this.ctvTotaleMin)
          );
        }
        if(this.ctvTotaleMax != null){
          this.arrayTemp = this.arrayTemp.filter(
            (row: any) => this.filterNumber(this.ctvTotaleMax, row.ctvTotale)
          );
        }


        this.rows = this.arrayTemp.slice(this.tempStart, this.tempEnd);
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
    this.numElem = newFilter.numElem;
    this.ngOnInit();
    
  }

  filterNumber(number1:any, number2:any) { 
    if(number1 > number2){
      return true; 
    }
    return false;
 } 
           
 

  clear(flagClear:any){
   
    this.ngOnInit();
}



  
}
