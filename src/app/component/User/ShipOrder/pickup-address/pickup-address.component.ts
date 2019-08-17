import { Component, OnInit, AfterViewInit } from '@angular/core';
import { States } from './../../../../model/State';
import { User2Service } from 'src/app/Services/user2.service';
import { City } from './../../../../model/City';
import { SourceAddress } from 'src/app/model/source_address';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
declare var M: any;


@Component({
  selector: 'app-pickup-address',
  templateUrl: './pickup-address.component.html',
  styleUrls: ['./pickup-address.component.css']
})
export class PickupAddressComponent implements OnInit ,AfterViewInit{

  constructor(private us:User2Service ,private router:Router) { }

  states : States[];
  city : City[];

  selectedState:String;

  s = new SourceAddress;


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
      this.s.state = s.state_name ; 
    });
  }

  onPickupSubmit()
  {
    this.s.user_id = parseInt (sessionStorage.getItem("id"));
    this.s.order_status = "In Transite";

    this.us.onPickupSubmit( this.s ).subscribe( orderID =>{
      console.log( orderID );
      sessionStorage.setItem("order_id", orderID );
      this.router.navigate(["user/order/destination"]);
    },
    (err:HttpErrorResponse) =>
    {
      console.log(err.error);
    });
  }


}
