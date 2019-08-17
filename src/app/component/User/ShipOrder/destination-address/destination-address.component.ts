import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User2Service } from './../../../../Services/user2.service';
import { Router } from '@angular/router';
import { States } from 'src/app/model/State';
import { City } from './../../../../model/City';
import { DestinationAddress } from './../../../../model/destination_address';
import { HttpErrorResponse } from '@angular/common/http';
declare var M: any;
@Component({
  selector: 'app-destination-address',
  templateUrl: './destination-address.component.html',
  styleUrls: ['./destination-address.component.css']
})
export class DestinationAddressComponent implements OnInit,AfterViewInit {

  constructor(private us:User2Service ,private router:Router) { }

  states : States[];
  city : City[];

  selectedState:String;

  d = new DestinationAddress();

  ngOnInit() {
    this.us.loadStates().subscribe( s =>{
      this.states = s;
      console.log(this.states);
    });
  }

  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem);
    }, 0)
  }

  loadCities()
  {  
    this.us.loadCities(this.selectedState).subscribe( c =>{
      console.log(c);
      this.city = c;
    });

    this.us.statebyID( this.selectedState ).subscribe( s => {
      this.d.state = s.state_name ; 
    });
  }

  onDestineSubmit()
  {
    this.d.user_id = parseInt (sessionStorage.getItem("id"));
    this.d.order_id = parseInt (sessionStorage.getItem("order_id"));

    console.log( this.d );
    this.us.onDestineSubmit( this.d ).subscribe( d =>
      {
        console.log(d);
        this.router.navigate(["user/order/package"]);
      },
      ( err:HttpErrorResponse )=>
      {
        console.log( err.error );
      } );
  }

}
