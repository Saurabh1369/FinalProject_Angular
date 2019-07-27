import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserHomeService } from './../../../Services/user-home.service';
import { SourceAddress } from 'src/app/model/source_address';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

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

}
