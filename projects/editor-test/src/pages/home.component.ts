import { Component } from "@angular/core";

;

@Component({
  standalone: true,
  selector: 'home',
  imports: [],
  template: `
  <a href='/TinyMCE-classic'>TinyMCE-Classic</a>
  <br />
  <a href='/TinyMCE-inline'>TinyMCE-Inline</a>
  <br />
  <a href='/TinyMCE-block'>TinyMCE-Block</a>
  <br />
  <a href='/Quill-classic'>Quill-Classic</a>
  <br />
  <a href='/Quill-inline'>Quill-Inline</a>
  <br />
  <a href='/Quill-block'>Quill-Block</a>
  `,
})
export class homeComponent {

}
