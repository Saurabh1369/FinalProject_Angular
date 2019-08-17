import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SourceAddress } from 'src/app/model/source_address';
import { AdminService } from 'src/app/Services/admin.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { OrderManagementDialogComponent } from '../order-management-dialog/order-management-dialog.component';
import { DeliveryService } from './../../../Services/delivery.service';

@Component({
  selector: 'app-delivery-order-management',
  templateUrl: './delivery-order-management.component.html',
  styleUrls: ['./delivery-order-management.component.css']
})
export class DeliveryOrderManagementComponent implements OnInit , AfterViewInit {

  constructor( private us:AdminService, private snackBar: MatSnackBar, public dialog: MatDialog ,private ds:DeliveryService ) { }
  srcaddr : SourceAddress[];


  ngOnInit() {
    this.us.getAllOrders( ).subscribe(s => {
      this.srcaddr = s;
      console.log(this.srcaddr);
    });
  }

  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem);
    }, 0)
  }

  

  OrderUpdate( w ): void {
    const dialogRef = this.dialog.open( OrderManagementDialogComponent , {data : w } );

    dialogRef.afterClosed().subscribe( data => {
      console.log(data);

      this.ds.updateOrder(data).subscribe(e => {
          console.log(e);
          this.snackBar.open('Order# '+ data.order_id + " Updated","",{ duration: 2000 });
        });
    });
  }

}
