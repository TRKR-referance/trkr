import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  columnDefs: ColDef[] = [
    {field: 'name'},
    {field: 'email'},
    {field: 'phoneNumber'},
    {field: 'role'},
    {field: 'status'}
  ];

  rowData = [
    {name: 'Toyota', email: 'Celica', phoneNumber: 35000, role: 'role', status: 'status'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
