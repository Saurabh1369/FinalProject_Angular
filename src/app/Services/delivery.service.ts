import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


const httpheader = 
{
  headers:new HttpHeaders({'Content-Type':"application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor( private http:HttpClient ) { }

  
  hosturl = "http://localhost:7070/Project_REST";

  updateOrder(data)
  {
    const url=`${this.hosturl}/updateOrder`;
    return this.http.put <String> (url,data,{responseType : 'text' as 'json'});
  }

}
