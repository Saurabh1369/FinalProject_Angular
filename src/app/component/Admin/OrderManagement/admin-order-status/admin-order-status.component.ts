import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SourceAddress } from 'src/app/model/source_address';
import { AdminService } from '../../../../Services/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var M: any;


@Component({
  selector: 'app-admin-order-status',
  templateUrl: './admin-order-status.component.html',
  styleUrls: ['./admin-order-status.component.css']
})
export class AdminOrderStatusComponent implements OnInit,AfterViewInit {

  constructor(private us:AdminService, private snackBar: MatSnackBar  ) { }
  
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


  onDelete( order_id )
  {
    this.us.onDelete( order_id ).subscribe( s =>
      {
        console.log(s);
        this.srcaddr = this.srcaddr.filter(s => s.order_id != order_id );
        console.log(this.srcaddr);
          this.snackBar.open("Order #"+order_id+" Deleted", "X",{ duration: 4000 });
      },
      (err:HttpErrorResponse)=>{
        console.log(err.error);
      } );


  }

}
