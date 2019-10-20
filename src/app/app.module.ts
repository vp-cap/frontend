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
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    UploadModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    WatchModule
=======
	AppRoutingModule,
	UploadModule,
	NoopAnimationsModule,
	HttpClientModule,
	MatToolbarModule,
	MatCardModule
>>>>>>> 86b8882ff020fb9c13d6fd5ecfdb27ad45ef25f1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
