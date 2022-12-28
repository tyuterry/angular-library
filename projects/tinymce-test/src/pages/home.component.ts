import { Component } from "@angular/core";

;

@Component({
  standalone: true,
  selector: 'home',
  imports: [],
  template: `
  <a href='/classic'>Classic</a>
  <br />
  <a href='/inline'>Inline</a>
  <br />
  <a href='/block'>Block</a>
  `,
})
export class homeComponent {

}
