import { Component, OnInit, Inject } from '@angular/core';
import { DeliveryType } from 'src/app/model/Delivery_Type';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delivery-type-dialog',
  templateUrl: './delivery-type-dialog.component.html',
  styleUrls: ['./delivery-type-dialog.component.css']
})
export class DeliveryTypeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeliveryTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeliveryType) { }

  ngOnInit() {
  }

}
