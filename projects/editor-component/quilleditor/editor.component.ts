import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import Quill from "quill";


@Component({
  standalone: true,
  selector: 'quillEditor',
  imports: [CommonModule, FormsModule],
  template: `
  <div id='editor' [class]='name'>{{data}}</div>
  <br />
  <br />
  <div (click)="click()">Data Console.log</div>
  `,
})
export class quillEditorComponent {

  @Input() data = '';
  @Input() theme = 'snow';
  @Input() name = '';

  editor!: Quill;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }


  ngAfterViewInit(): void {

    var toobarop = [
      [{ 'font': [] }, { 'size': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'super' }, { 'script': 'sub' }],
      [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['direction', { 'align': [] }],
      ['link', 'image', 'video', 'formula'],
      ['clean']
    ];

    var options = {
      debug: 'info',
      modules: {
        toolbar: toobarop
      },
      placeholder: 'Compose an epic...',
      theme: this.theme
    };

    let quillclass = this.name == '' ? '' : '.' + this.name;

    this.editor = new Quill('#editor' + quillclass, options);
  }

  click() {
    console.warn(this.editor.getContents());
  }

}
