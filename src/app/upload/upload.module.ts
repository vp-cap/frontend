import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { VideoComponent } from './video/video.component';
import { AdComponent } from './ad/ad.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [UploadComponent, VideoComponent, AdComponent],
  imports: [
	CommonModule,
	MatSelectModule,
	MatCheckboxModule,
	MatTabsModule,
	MatFormFieldModule,
	MatInputModule,
	MatProgressBarModule,
	MatButtonModule,
	MatIconModule,
	MatAutocompleteModule,
	MatProgressSpinnerModule
  ]
})
export class UploadModule { }
