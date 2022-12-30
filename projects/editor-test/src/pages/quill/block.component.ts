import { quillEditorComponent } from 'editor-component/quilleditor';
import { Component, Input } from "@angular/core";


@Component({
  standalone: true,
  selector: 'quill-block',
  imports: [quillEditorComponent],
  template: `
  <quillEditor style='' [name]="'n12'" [data]="data" [theme]='theme'></quillEditor>
  <quillEditor style='' [name]="'n22'" [data]="data" [theme]='theme'></quillEditor>
  <a href="/">Back to Home</a>
  `,

})
export class quillBlockComponent {

  data = 'Just type something';
  theme = 'bubble'
}
