import { Component, Input } from '@angular/core';

@Component({
  selector: 'movies',
  template: `<h1> {{movieName}}!</h1> `,
  styles: [`h1 { font-family: Lato; }`],
})
export class MoviesComponent {
  @Input() movieName: string;
}
