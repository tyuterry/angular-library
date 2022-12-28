import { tinymceEditorComponent } from 'tinymce-editor/editor';
import { Component } from "@angular/core";


@Component({
  standalone: true,
  selector: 'tinymce-classic',
  imports: [tinymceEditorComponent],
  template: `
  <tinymceEditor [data]='data'></tinymceEditor>
  <a href="/">Back to Home</a>
  `,
})
export class tinymceClassicComponent {

  data = 'Just type something';
}
