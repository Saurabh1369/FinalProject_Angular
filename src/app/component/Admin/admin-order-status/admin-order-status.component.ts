import { Component, OnInit } from '@angular/core';
import { UserHomeService } from 'src/app/Services/user-home.service';
import { SourceAddress } from 'src/app/model/source_address';
import { AdminService } from './../../../Services/admin.service';

@Component({
  selector: 'app-admin-order-status',
  templateUrl: './admin-order-status.component.html',
  styleUrls: ['./admin-order-status.component.css']
})
export class AdminOrderStatusComponent implements OnInit {

  constructor(private us:AdminService) { }

  
  srcaddr : SourceAddress[];

  ngOnInit() {
    this.us.getAllOrders( sessionStorage.getItem("id") ).subscribe(s => {
      this.srcaddr = s;
      console.log(this.srcaddr);
    });
  }

}
