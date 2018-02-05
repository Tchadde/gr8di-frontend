import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    FootBarComponent,
    HeadBarComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProjectsComponent]
})
export class AppModule { }
