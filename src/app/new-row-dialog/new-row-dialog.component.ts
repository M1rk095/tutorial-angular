import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-new-row-dialog',
  templateUrl: './new-row-dialog.component.html',
  styleUrls: ['./new-row-dialog.component.scss']
})
export class NewRowDialogComponent implements OnInit {

  nominativoCliente: any = '';
  ndgCliente: any ='';
  businessUnit: any = '';
  ctvGestito: any = '';
  ctvAmministrato: any = '';
  ctvAssicurativo: any = '';
  ctvDiretto: any = '';
  ctvTotale: any = '';
  listaAzioni: any = [];

  prova:any;


  addRow = new FormGroup({
    nominativoCliente: new FormControl(),
    ndgCliente: new FormControl(),
    businessUnit: new FormControl(),
    ctvGestito: new FormControl(),
    ctvAmministrato: new FormControl(), 
    ctvAssicurativo: new FormControl(), 
    ctvDiretto: new FormControl(), 
    ctvTotale: new FormControl(),
    listaAzioni: new FormControl()
  });


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewRowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public row: any) {



     }

  ngOnInit(): void {
    if(this.row != null){
      this.nominativoCliente = this.row.nominativoCliente;
      this.ndgCliente = this.row.ndgCliente;
      this.businessUnit =  this.row.businessUnit;
      this.ctvGestito = this.row.ctvGestito;
      this.ctvAmministrato = this.row.ctvAmministrato;
      this.ctvAssicurativo = this.row.ctvAssicurativo;
      this.ctvDiretto = this.row.ctvDiretto;
      this.ctvTotale = this.row.ctvTotale;
    }
    
    
  }

  onSubmit() {
    
  }

}
