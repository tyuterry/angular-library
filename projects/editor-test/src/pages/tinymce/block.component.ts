import { tinymceEditorComponent } from 'editor-component/tinymceeditor';
import { Component, Input } from "@angular/core";


@Component({
  standalone: true,
  selector: 'tinymce-block',
  imports: [tinymceEditorComponent],
  template: `
  <tinymceEditor [data]='data' [inline]="true" [menubar]="false" [toolbar]="false"></tinymceEditor>
  <a href="/">Back to Home</a>
  <p>Style Test</p>
  `,
  // styles: [`p {
  //   font-size: 30px;
  // }`]
})
export class tinymceBlockComponent {

  data = 'Just type something';
}
