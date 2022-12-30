import { Component } from "@angular/core";
import { quillEditorComponent } from 'editor-component/quilleditor';


@Component({
  standalone: true,
  selector: 'quill-classic',
  imports: [quillEditorComponent],
  template: `
  <quillEditor style='' [data]="data" [theme]='theme'></quillEditor>
  <div style='margin:60px'></div>
  <a href="/">Back to Home</a>
  <!-- <p>Style Test</p> -->
  `,
  // styles: [`p {
  //   font-size: 30px;
  // }`]
})
export class quillInlineComponent {

  data = 'Just type something';

  theme = 'bubble'
}
