import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { DeliveryType } from './../../../../model/Delivery_Type';
import { MatDialog } from '@angular/material';
import { DeliveryTypeDialogComponent } from '../delivery-type-dialog/delivery-type-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delivery-type',
  templateUrl: './delivery-type.component.html',
  styleUrls: ['./delivery-type.component.css']
})
export class DeliveryTypeComponent implements OnInit {

  constructor(  private as:AdminService,public dialog: MatDialog,private snackBar: MatSnackBar  ) { }

  dt:DeliveryType[];


  ngOnInit() {
    this.as.getAlldtype().subscribe( d => {
      this.dt = d;
      console.log(this.dt);
    });
  }

  openDialog( d ): void {
    const dialogRef = this.dialog.open( DeliveryTypeDialogComponent , {data : d } );

    dialogRef.afterClosed().subscribe( data => {
      console.log(data);

      this.as.updateDtype(data).subscribe(e => {
          console.log(e);
          this.snackBar.open(data.d_type + " Updated","",{ duration: 2000 });
        });
    });
  }

}
