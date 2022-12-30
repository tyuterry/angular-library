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
  <div (click)="click()">Data Console.log</div>
  `,
  // styles: [
  //   `::ng-deep editor > div{
  //     min-height:100%;
  //   }
  //   `
  // ]
})
export class quillEditorComponent {

  // loadTinyMce = false;
  @Input() data = '';
  @Input() theme = 'snow';
  @Input() name = '';
  // @Input() toolbar: string | false = 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample ';
  // @Input() menubar: string | false = 'file edit view insert format tools table help';
  // @Input() resize = false;

  // initConfig: RawEditorOptions = {};

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

    console.log(Quill);
  }

  click() {
    console.warn(this.editor.getContents());
  }

}
