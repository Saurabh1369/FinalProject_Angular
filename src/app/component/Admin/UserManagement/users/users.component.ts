import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Users } from './../../../../model/user';
import { HttpErrorResponse } from '@angular/common/http';
declare var M: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,AfterViewInit  {

  constructor(private us:AdminService, private snackBar: MatSnackBar ) { }

  usrs :Users[];

  ngOnInit() {
    this.us.GetAllUsers( ).subscribe(u => {
      console.log(this.usrs);

      this.usrs= u.filter (u1 => u1.user_type != 'A');
    });
  }

  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem);
    }, 0)
  }

onDelete( user_id )
{
  console.log( user_id );
  this.us.onDeleteUser( user_id ).subscribe( u =>
    {
      this.usrs = this.usrs.filter(s => s.user_id != user_id );
      this.snackBar.open("User #"+user_id+" Deleted", "X",{ duration: 4000 });
    },
    (err:HttpErrorResponse)=>{
      console.log(err.error);
      this.snackBar.open("Error", "X",{ duration: 4000 });
    } );
  }
}
