import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-row-dialog',
  templateUrl: './new-row-dialog.component.html',
  styleUrls: ['./new-row-dialog.component.scss']
})
export class NewRowDialogComponent implements OnInit {

  newNominativoCliente: any;
  newNdgCliente: any;
  newBusinessUnit: any;
  newCtvGestito: any;
  newCtvAmministrato: any;
  newCtvAssicurativo: any;
  newCtvDiretto: any;
  newCtvTotale: any;
  newListaAzioni: any;

  addRow = new FormGroup({
    newNominativoCliente: new FormControl(),
    newNdgCliente: new FormControl(),
    newBusinessUnit: new FormControl(),
    newCtvGestito: new FormControl(),
    newCtvAmministrato: new FormControl(), 
    newCtvAssicurativo: new FormControl(), 
    newCtvDiretto: new FormControl(), 
    newCtvTotale: new FormControl(),
    newListaAzioni: new FormControl()
  });

  // "nominativoCliente": "Beatrice Greco",
  // "ndgCliente": 195857,
  // "businessUnit": 15,
  // "ctvGestito": 4,
  // "ctvAmministrato": 200,
  // "ctvAssicurativo": 294,
  // "ctvDiretto": 832,
  // "ctvTotale": 1330,
  // "listaAzioni": []

  constructor(
    public dialogRef: MatDialogRef<NewRowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }

  onClickNO(): void{

    this.dialogRef.close();
  }

  
  onSubmit() {
  
  }

}
