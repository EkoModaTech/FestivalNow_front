import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import { Ticket } from 'src/app/models/tickets.interface';

@Component({
  selector: 'app-confirmar-compra-dialog',
  templateUrl: './confirmar-compra-dialog.component.html',
  styleUrls: ['./confirmar-compra-dialog.component.css']
})
export class ConfirmarCompraDialogComponent implements OnInit {
  ticket: Ticket = {idTicket: null, code: null, price: null, idEvent: null};

  constructor(
    public dialogRef: MatDialogRef<ConfirmarCompraDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ticketService: TicketServiceService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    const price = Math.floor(Math.random() * (1000000 - 20000) + 20);
    this.ticketService.postTicket('A', price, this.data.eventId).subscribe((response: any) => {
      console.log(response);
      this.ticket = response as Ticket;
    }, error => {
      console.error(error);
    });
  }
  
}