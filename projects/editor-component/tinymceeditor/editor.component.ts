import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EditorModule } from '@tinymce/tinymce-angular';
import { RawEditorOptions } from 'tinymce';

@Component({
  standalone: true,
  selector: 'tinymceEditor',
  imports: [EditorModule, CommonModule, FormsModule],
  template: `
  <editor
  *ngIf="loadTinyMce"
  style='height:100%'
  apiKey="no-api-key"
  [disabled]="false"
  [init]="initConfig"
  [inline]="inline"
  [(ngModel)]="data"
  tagName="div">
  </editor>
  `,
})
export class tinymceEditorComponent {

  loadTinyMce = false;
  @Input() data = '';
  @Input() inline = false;
  @Input() toolbar: string | false = 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample ';
  @Input() menubar: string | false = 'file edit view insert format tools table help';
  @Input() resize = false;

  initConfig: RawEditorOptions = {};

  constructor(private changeDetectorRef: ChangeDetectorRef) { }


  ngAfterViewInit(): void {
    this.initConfig = {
      selector: 'div',
      base_url: '/tinymce',
      minheight: '400px',
      resize: this.resize,
      language: 'zh-Hant',
      language_url: '/assets/tinymce/zh-Hant.js',
      promotion: false,
      suffix: '.min',
      plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
      menubar: this.menubar,
      toolbar: this.toolbar,
      toolbar_sticky: true,
      toolbar_mode: 'sliding',  // 'floating' | 'sliding' | 'scrolling' | 'wrap'
    }
    this.loadTinyMce = true;
    this.changeDetectorRef.detectChanges();
  }

}
