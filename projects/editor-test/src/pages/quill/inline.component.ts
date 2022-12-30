import { Component } from "@angular/core";
import { quillEditorComponent } from 'editor-component/quilleditor';


@Component({
  standalone: true,
  selector: 'quill-classic',
  imports: [quillEditorComponent],
  template: `
  <div style='margin:60px'></div>
  <quillEditor style='' [data]="data" [theme]='theme'></quillEditor>
  <div style='margin:60px'></div>
  <a href="/">Back to Home</a>
  `,
})
export class quillInlineComponent {

  data = 'Just type something';
  theme = 'bubble'
}
