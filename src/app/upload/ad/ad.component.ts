import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
	// myControl = new FormControl();
	// options: string[] = ['One', 'Two', 'Three'];
	// filteredOptions: Observable<string[]>;

	ngOnInit() {
	// 	this.filteredOptions = this.myControl.valueChanges.pipe(
	// 		startWith(''),
	// 		map(value => this._filter(value))
	// 	);
	}

	// private _filter(value: string): string[] {
	// 	const filterValue = value.toLowerCase();

	// 	return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
	// }

	selectedCategory = ''
	uploadResponse = { status: '', message: '', filePath: '' };
	error: string;
	categories = ['Sports', 'Kids', 'News', 'Politics', 'Music'];
	// selectedCategories = [];
	// videoFile;
	constructor(private uploadService: UploadService) { }

	// onFileChange(event) {
	// 	if (event.target.files.length > 0) {
	// 		this.videoFile = event.target.files[0];
	// 	}
	// }

	onSubmit(redirect_url, image_url, object) {
		const formData = new FormData();
		formData.append('category', this.selectedCategory);
		formData.append('redirect_url', redirect_url);
		formData.append('image_url', image_url);
		formData.append('object', object);

		this.uploadService.upload(formData, 1).subscribe(
		  (res) => this.uploadResponse = res,
		  (err) => this.error = err
		);
	}

	// onChange(category, isChecked) {	  
	// 	if(isChecked) {
	// 		this.selectedCategories.push(category);
	// 	} else {
	// 	  let index = this.selectedCategories.findIndex(x => x.value == category)
	// 	  this.selectedCategories.splice(index, 1);
	// 	}
	// }
}
