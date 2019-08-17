import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SourceAddress } from './../../../model/source_address';
import { UserHomeService } from './../../../Services/user-home.service';
declare var M: any;

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit,AfterViewInit {

  constructor(private us:UserHomeService) { }

  srcaddr : SourceAddress[];

  ngOnInit() {
    this.us.getAllOrders( sessionStorage.getItem("id") ).subscribe(s => {
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

}
