import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Weight } from './../../../../model/weight';

@Component({
  selector: 'app-weight-dailog',
  templateUrl: './weight-dailog.component.html',
  styleUrls: ['./weight-dailog.component.css']
})
export class WeightDailogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WeightDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Weight ) { }

  ngOnInit() {
  }

}
