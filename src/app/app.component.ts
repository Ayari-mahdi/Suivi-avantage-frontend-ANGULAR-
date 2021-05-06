import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private _snackBar: MatSnackBar,
    private router: Router,
  ) { }
  title = 'Suivi Avatange';
  

  openSnackBar() {
    this._snackBar.open('hello','dismiss' ,{
      duration: 5000,panelClass:'snackbar'
    });}
  
}
