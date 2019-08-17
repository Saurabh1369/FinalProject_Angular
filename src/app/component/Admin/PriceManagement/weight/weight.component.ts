import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Weight } from './../../../../model/weight';
import { MatDialog } from '@angular/material/dialog';
import { WeightDailogComponent } from '../weight-dailog/weight-dailog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  constructor( private as:AdminService, public dialog: MatDialog ,private snackBar: MatSnackBar) { }

  wts : Weight[];

  ngOnInit() {
    this.as.getAllWeights().subscribe( w => {
        this.wts = w;
        console.log(this.wts);
      });
  }

  openDialog( w ): void {
    const dialogRef = this.dialog.open( WeightDailogComponent , {data : w } );

    dialogRef.afterClosed().subscribe( data => {
      console.log(data);

      this.as.updateWeight(data).subscribe(e => {
          console.log(e);
          this.snackBar.open(data.weight_range + " Updated","",{ duration: 2000 });
        });
    });
  }

}
