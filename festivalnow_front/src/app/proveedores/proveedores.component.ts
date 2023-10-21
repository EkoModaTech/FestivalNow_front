import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Proveedor } from '../models/proveedor.interface';

const ELEMENT_DATA: Proveedor[] = [
  {id: 1, name: 'Proveedor 1', address: '123 Main St', contact: '123-456-7890'},
  {id: 2, name: 'Proveedor 2', address: '456 Oak Ave', contact: '987-654-3210'},
  {id: 3, name: 'Proveedor 3', address: '789 Pine Ln', contact: '456-789-0123'},
  {id: 4, name: 'Proveedor 4', address: 'Address 4', contact: 'Contact 4'},
  {id: 5, name: 'Proveedor 5', address: 'Address 5', contact: 'Contact 5'},
  {id: 6, name: 'Proveedor 6', address: 'Address 6', contact: 'Contact 6'},
  {id: 7, name: 'Proveedor 7', address: 'Address 7', contact: 'Contact 7'},
  {id: 8, name: 'Proveedor 8', address: 'Address 8', contact: 'Contact 8'},
  {id: 9, name: 'Proveedor 9', address: 'Address 9', contact: 'Contact 9'},
  {id: 10, name: 'Proveedor 10', address: 'Address 10', contact: 'Contact 10'},
  {id: 11, name: 'Proveedor 11', address: 'Address 11', contact: 'Contact 11'},
  {id: 12, name: 'Proveedor 12', address: 'Address 12', contact: 'Contact 12'},
  {id: 13, name: 'Proveedor 13', address: 'Address 13', contact: 'Contact 13'},
  {id: 14, name: 'Proveedor 14', address: 'Address 14', contact: 'Contact 14'},
  {id: 15, name: 'Proveedor 15', address: 'Address 15', contact: 'Contact 15'},
  {id: 16, name: 'Proveedor 16', address: 'Address 16', contact: 'Contact 16'},
  {id: 17, name: 'Proveedor 17', address: 'Address 17', contact: 'Contact 17'},
  {id: 18, name: 'Proveedor 18', address: 'Address 18', contact: 'Contact 18'},
  {id: 19, name: 'Proveedor 19', address: 'Address 19', contact: 'Contact 19'},
  {id: 20, name: 'Proveedor 20', address: 'Address 20', contact: 'Contact 20'},
];

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements AfterViewInit {
  displayedColumns = ['id', 'name', 'address', 'contact'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}