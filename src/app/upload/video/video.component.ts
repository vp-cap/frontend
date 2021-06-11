import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
	state: number
	form: FormGroup;
	uploadResponse = { status: '', message: '', filePath: '' };
	error: string;
	videoFile;
	constructor(private uploadService: UploadService) { }

	ngOnInit() {this.state = 0}

	onFileChange(event) {
		if (event.target.files.length > 0) {
			this.videoFile = event.target.files[0];
		}
	}

	onSubmit(name, videoDesc) {
		const formData = new FormData();
		formData.append('videoFile', this.videoFile);
		formData.append('videoName', name);
		formData.append('videoDesc', videoDesc);
		this.state = 1
		console.log(name)
		this.uploadService.upload(formData, 0).subscribe(
		  (res) => {
			  this.uploadResponse = res
			  if (this.uploadResponse.status == "200") {
				this.state = 2
			  } else {
				  this.state = 0
			  }
		  },
		  (err) => {
			this.error = err
			this.state = 0
			}
		);
	}
}
