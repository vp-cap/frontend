import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
// import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    // MatListModule,
    MatChipsModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
