import { Injectable } from '@angular/core';
import{ HttpClient ,HttpHeaders } from '@angular/common/http'
import { Users } from './../model/user';
import { Observable } from 'rxjs';

const httpheader = {
  headers:new HttpHeaders({'Content-Type':"application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  hosturl = "https://rest-java-cms.herokuapp.com/users";

  signupService(user :any) : Observable<Users> {
    console.log("signup : services");
    const url = `${this.hosturl}/signup`;
    return this.http.post <Users> ( url ,user, httpheader);
  }

  onlogin(user :any) : Observable< Users > {
    const url = `${this.hosturl}/login`;
    return this.http.post <Users> ( url ,user ,httpheader );
  }

}