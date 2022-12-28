import { tinymceBlockComponent } from './../pages/block.component';
import { tinymceInlineComponent } from './../pages/inline.component';
import { CommonModule } from '@angular/common';
import { tinymceEditorModule } from 'tinymce-editor/editor';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { tinymceClassicComponent } from '../pages/classic.component';
import { homeComponent } from '../pages/home.component';


const routes: Routes = [
  { path: 'block', component: tinymceBlockComponent },
  { path: 'classic', component: tinymceClassicComponent },
  { path: 'inline', component: tinymceInlineComponent },
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
