import { tinymceEditorComponent } from 'editor-component/tinymceeditor';
import { Component } from "@angular/core";


@Component({
  standalone: true,
  selector: 'tinymce-classic',
  imports: [tinymceEditorComponent],
  template: `
  <tinymceEditor [data]='data'></tinymceEditor>
  <a href="/">Back to Home</a>
  <p>Style Test</p>
  `,
  // styles: [`p {
  //   font-size: 30px;
  // }`]
})
export class tinymceClassicComponent {

  data = 'Just type something';
}
