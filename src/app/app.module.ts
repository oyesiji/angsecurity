import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

import {PhotoService} from './services/photo.service';
import { SidePanelComponent } from './side-panel/side-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
