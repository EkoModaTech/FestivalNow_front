import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar-compra-dialog',
  templateUrl: './confirmar-compra-dialog.component.html',
  styleUrls: ['./confirmar-compra-dialog.component.css']
})
export class ConfirmarCompraDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmarCompraDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}