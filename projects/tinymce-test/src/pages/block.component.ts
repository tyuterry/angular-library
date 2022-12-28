import { tinymceEditorComponent } from 'tinymce-editor/editor';
import { Component, Input } from "@angular/core";


@Component({
  standalone: true,
  selector: 'tinymce-block',
  imports: [tinymceEditorComponent],
  template: `
  <tinymceEditor [data]='data' [inline]="true" [menubar]="'false'" [toolbar]="'false'"></tinymceEditor>
  <a href="/">Back to Home</a>
  `,
})
export class tinymceBlockComponent {

  data = 'Just type something';
}
