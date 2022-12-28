import { tinymceEditorComponent } from 'tinymce-editor/editor';
import { Component, Input } from "@angular/core";


@Component({
  standalone: true,
  selector: 'tinymce-inline',
  imports: [tinymceEditorComponent],
  template: `
  <div style='display:flex;'>
    <tinymceEditor style='flex:0 0 50%;width:50%' [data]='data' [inline]="true"></tinymceEditor>
    <tinymceEditor style='flex:0 0 50%;width:50%' [data]='data2' [inline]="true"></tinymceEditor>
  </div>

  <a href="/">Back to Home</a>
  `,
})
export class tinymceInlineComponent {
  data = 'Just type something';
  data2 = 'Another Editor';
}
