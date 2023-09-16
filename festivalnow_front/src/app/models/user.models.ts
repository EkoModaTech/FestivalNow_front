export class User {
  id: number;
  nombre: string;
  rol: string;

  constructor(id: number, nombre: string, rol: string) {
    this.id = id;
    this.nombre = nombre;
    this.rol = rol;
  }
}