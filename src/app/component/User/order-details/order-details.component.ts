import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserHomeService } from './../../../Services/user-home.service';
import { SourceAddress } from 'src/app/model/source_address';
declare var M: any;
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit,AfterViewInit {

  constructor( private route: ActivatedRoute, private router: Router, private us:UserHomeService) { }
  
  id:string;
  orderDetail:SourceAddress;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log( this.id );

    this.us.getOrderById(this.id).subscribe( s=>
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
