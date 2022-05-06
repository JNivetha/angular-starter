import { Component, Input } from '@angular/core';

@Component({
  selector: 'briyani',
  templateUrl: '../BriyaniTypes/BriyaniTypes.component.html',
  styleUrls: ['../BriyaniTypes/BriyaniTypes.component.css'],
})
export class BriyaniTypesComponent {
  @Input() name1: string;
  @Input() name2: string;
  @Input() hideMuttonbri: boolean;
}
