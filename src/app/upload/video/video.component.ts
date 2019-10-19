import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
	form: FormGroup;
	uploadResponse = { status: '', message: '', filePath: '' };
	error: string;
	categories = ['Sports', 'Kids', 'News', 'Politics', 'Music'];
	selectedCategory = '';
	videoFile;
	constructor(private uploadService: UploadService) { }

	ngOnInit() {}

	onFileChange(event) {
		if (event.target.files.length > 0) {
			this.videoFile = event.target.files[0];
		}
	}

	onSubmit(title, desc) {
		const formData = new FormData();
		formData.append('video_file', this.videoFile);
		formData.append('category', this.selectedCategory);
		formData.append('title', title);
		formData.append('description', desc);

		console.log(title)
		this.uploadService.upload(formData, 0).subscribe(
		  (res) => this.uploadResponse = res,
		  (err) => this.error = err
		);
	}
}
