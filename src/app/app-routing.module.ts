import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { SearchComponent } from './search/search.component';
import { WatchComponent } from './watch/watch.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: 'upload',
		component: UploadComponent
	},
	{
		path: 'search',
		component: SearchComponent
	},
	{
		path: 'watch/:video_id',
		component: WatchComponent
	},
	{
		path: '',
		component: HomeComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
