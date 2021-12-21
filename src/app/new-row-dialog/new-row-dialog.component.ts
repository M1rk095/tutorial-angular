import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-row-dialog',
  templateUrl: './new-row-dialog.component.html',
  styleUrls: ['./new-row-dialog.component.scss']
})
export class NewRowDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewRowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }

  onClickNO(): void{
    this.dialogRef.close();
  }

}
