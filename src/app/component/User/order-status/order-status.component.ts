import { Component, OnInit } from '@angular/core';
import { SourceAddress } from './../../../model/source_address';
import { UserHomeService } from './../../../Services/user-home.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  constructor(private us:UserHomeService) { }

  srcaddr : SourceAddress[];

  ngOnInit() {
    this.us.getAllOrders( sessionStorage.getItem("id") ).subscribe(s => {
      this.srcaddr = s;
      console.log(this.srcaddr);
    });
  }

}
