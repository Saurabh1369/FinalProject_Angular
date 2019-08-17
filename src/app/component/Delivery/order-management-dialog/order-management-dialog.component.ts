import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Users } from 'src/app/model/user';

@Component({
  selector: 'app-order-management-dialog',
  templateUrl: './order-management-dialog.component.html',
  styleUrls: ['./order-management-dialog.component.css']
})
export class OrderManagementDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<OrderManagementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Users ) { }

  ngOnInit() {
  }

}
