import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { SourceAddress } from 'src/app/model/source_address';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit,AfterViewInit {

  constructor(  private route: ActivatedRoute, private router: Router, private as:AdminService ) { }

  id:string;
  orderDetail:SourceAddress;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log( this.id );

    this.as.getOrderById(this.id).subscribe( s=>
      {
        console.log(s);
        this.orderDetail = s;
      });
  }

  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem);
    }, 0)
  }
}
