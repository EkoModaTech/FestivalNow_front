export interface Event {
  idEvent: number;
  name: string;
  date: string | null;
  ability: number;
  description: string;
  state: string | null;
  type: string;
  city: string | null | any;
  url: string | null;
  direction: string | null;
  visibility: boolean | null;
  createdBy: string | null;
}