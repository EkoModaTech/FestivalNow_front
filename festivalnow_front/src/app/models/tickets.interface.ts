export interface Ticket {
    idTicket: number | null;
    code: string | null;
    price: number | null;
    idEvent: number | null;
    eventName?: string | null;
  }