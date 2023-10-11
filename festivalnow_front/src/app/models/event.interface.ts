export interface Event {
  idEvent: number;
  name: string;
  date: string | null;
  ability: number;
  description: string;
  state: string | null;
  type: string;
  city: string | null | any;
  logistic: string | null;
  url: string | null;
}