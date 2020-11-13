import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SourceAddress } from 'src/app/model/source_address';
import { Observable } from 'rxjs';


const httpheader = {
  headers:new HttpHeaders({'Content-Type':"application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class UserHomeService {

  constructor(private http:HttpClient) { }
  
  hosturl = "https://rest-java-cms.herokuapp.com";

  getAllOrders( id ) : Observable <SourceAddress[]> {
    const url = `${this.hosturl}/getAllOrders/${id}`;
    return this.http.get < SourceAddress[] > (url,httpheader);
  }

  getOrderById(id) : Observable <SourceAddress> {
    const url = `${this.hosturl}/getOrderByID/${id}`;
    return this.http.get < SourceAddress > (url,httpheader);
  }

}
