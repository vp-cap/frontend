import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UploadModule } from './upload/upload.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WatchModule } from './watch/watch.module';
import { MatCardModule } from '@angular/material/card';
import { HomeModule } from './home/home.module';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	UploadModule,
	HttpClientModule,
	MatToolbarModule,
	MatCardModule,
  WatchModule,
  HomeModule,
  MatChipsModule,	
  MatListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
