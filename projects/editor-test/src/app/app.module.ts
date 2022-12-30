import { tinymceBlockComponent } from '../pages/tinymce/block.component';
import { tinymceInlineComponent } from '../pages/tinymce/inline.component';
import { CommonModule } from '@angular/common';
import { tinymceEditorModule } from 'editor-component/tinymceeditor';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { tinymceClassicComponent } from '../pages/tinymce/classic.component';
import { homeComponent } from '../pages/home.component';
import { quillBlockComponent } from '../pages/quill/block.component';
import { quillClassicComponent } from '../pages/quill/classic.component';
import { quillInlineComponent } from '../pages/quill/inline.component';


const routes: Routes = [
  { path: 'TinyMCE-block', component: tinymceBlockComponent },
  { path: 'TinyMCE-classic', component: tinymceClassicComponent },
  { path: 'TinyMCE-inline', component: tinymceInlineComponent },
  { path: 'Quill-block', component: quillBlockComponent },
  { path: 'Quill-classic', component: quillClassicComponent },
  { path: 'Quill-inline', component: quillInlineComponent },
  { path: '', component: homeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    tinymceEditorModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
