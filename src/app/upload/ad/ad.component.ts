import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
	form: FormGroup;
	uploadResponse = { status: '', message: '', filePath: '' };
	error: string;
	categories = ['S', 'A', 'B'];
	selectedCategories = [];
	videoFile;
	constructor(private uploadService: UploadService) { }

	ngOnInit() {}

	onFileChange(event) {
		if (event.target.files.length > 0) {
			this.videoFile = event.target.files[0];
		}
	}

	onSubmit(url, desc) {
		const formData = new FormData();
		formData.append('video_file', this.videoFile);
		formData.append('categories', JSON.stringify(this.selectedCategories));
		formData.append('url', url);
		formData.append('description', desc);

		this.uploadService.upload(formData, 0).subscribe(
		  (res) => this.uploadResponse = res,
		  (err) => this.error = err
		);
	}

	onChange(category, isChecked) {	  
		if(isChecked) {
			this.selectedCategories.push(category);
		} else {
		  let index = this.selectedCategories.findIndex(x => x.value == category)
		  this.selectedCategories.splice(index, 1);
		}
	  }
}
