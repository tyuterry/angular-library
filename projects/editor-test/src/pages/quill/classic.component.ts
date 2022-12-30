import { Component } from "@angular/core";
import { quillEditorComponent } from 'editor-component/quilleditor';


@Component({
  standalone: true,
  selector: 'quill-classic',
  imports: [quillEditorComponent],
  template: `
  <quillEditor [data]="data"></quillEditor>
  <a href="/">Back to Home</a>
  `,
})
export class quillClassicComponent {

  data = 'Just type something';
}
