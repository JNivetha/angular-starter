import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ts ';
  number = 2;
  fruit = 'apple';
  moviesName = 'Paruthiveeran';
  showPtag: boolean = true;
  hideChicken: boolean = false;
  hideMutton: boolean = false;
  reddy = 'red';
  name1 = 'MuttonBriyani';
  name2 = 'ChickenBriyani';
}
