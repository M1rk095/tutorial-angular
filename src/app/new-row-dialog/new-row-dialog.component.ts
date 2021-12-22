import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-new-row-dialog',
  templateUrl: './new-row-dialog.component.html',
  styleUrls: ['./new-row-dialog.component.scss']
})
export class NewRowDialogComponent implements OnInit {

  newNominativoCliente: any = '';
  newNdgCliente: any ='';
  newBusinessUnit: any = '';
  newCtvGestito: any = '';
  newCtvAmministrato: any = '';
  newCtvAssicurativo: any = '';
  newCtvDiretto: any = '';
  newCtvTotale: any = '';
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


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewRowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {

    
  }

  onSubmit() {
    
  }

}
