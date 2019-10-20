import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UploadModule } from './upload/upload.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WatchModule } from './watch/watch.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    WatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
