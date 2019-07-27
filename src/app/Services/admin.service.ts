import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SourceAddress } from './../model/source_address';


const httpheader = 
{
  headers:new HttpHeaders({'Content-Type':"application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  hosturl = "http://localhost:7070/Project_REST";

  getAllOrders( id ) : Observable <SourceAddress[]>
  {
    const url = `${this.hosturl}/getAllOrders`;
    return this.http.get < SourceAddress[] > (url,httpheader);
  }
}
