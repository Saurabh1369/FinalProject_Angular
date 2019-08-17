import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { States } from '../model/State';
import { Observable } from 'rxjs';
import { City } from './../model/City';
import { Weight } from './../model/weight';
import { DeliveryType } from './../model/Delivery_Type';
import { packageInfo } from '../model/packge-info';


const httpheader = 
{
  headers:new HttpHeaders({'Content-Type':"application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class User2Service {

  constructor(private http:HttpClient) { }

  hosturl = "https://rest-java-cms.herokuapp.com";



  loadStates() : Observable <States []>
  {
    const url = `${this.hosturl}/states`;
    return this.http.get < States[] > ( url ,httpheader );

  }

  loadCities( selectedState ): Observable < City[] >
  {
    console.log( selectedState );
    const url = `${ this.hosturl }/city`;
    return this.http.post < City[] > ( url, selectedState, httpheader);
  }

  onPickupSubmit( sourceaddr ):Observable <any>
  {
    const url = `${ this.hosturl }/pickupAddress`;
    return this.http.post <any> ( url, sourceaddr, {
      responseType: 'text' as 'json'
        });
  }

  onDestineSubmit( destaddr ) : Observable <any>
  {
    const url = `${ this.hosturl }/destination`;
    return this.http.post <any> ( url, destaddr, {
      responseType:  'text' as 'json'
        });
  }

  statebyID( selectedState ):Observable <States>
  {
    const url = `${ this.hosturl }/statebyID`;
    return this.http.post < States > ( url ,selectedState ,httpheader );
  }

  getWeights() :Observable < Weight[] >
  {
    const url = `${ this.hosturl }/Weights`;
    return this.http.get < Weight[] > (url,httpheader);
  }

  getDtype() : Observable < DeliveryType[] >
  {
    const url = `${ this.hosturl }/dtype`;
    return this.http.get< DeliveryType[] > (url,httpheader);
  }

  onPackageSubmit( pkg ) :Observable <any>
  {
    const url = `${ this.hosturl }/packageInfo`;
    return this.http.post < any > (url , pkg,{
      responseType:  'text' as 'json'
        });
  }
}
