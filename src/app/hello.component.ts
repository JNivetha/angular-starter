import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{names}}{{numbers}} {{fruits}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() names: string;
  @Input() numbers: number;
  @Input() fruits: string;
  moviesName = 'Paruthiveeran';
}
