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
	state: number
	// myControl = new FormControl();
	// options: string[] = ['One', 'Two', 'Three'];
	// filteredOptions: Observable<string[]>;

	ngOnInit() {
		this.state = 0;
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
	// object detection catergories https://github.com/OlafenwaMoses/ImageAI/blob/master/imageai/Detection/VIDEO.md
	categories = ['bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat', 'traffic light', 'fire hydrant', 'stop_sign',
		'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra',
		'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee', 'skis', 'snowboard',
		'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard', 'tennis racket',
		'bottle', 'wine glass', 'cup','fork', 'knife', 'spoon', 'bowl', 'banana', 'apple', 'sandwich', 'orange',
		'broccoli', 'carrot', 'hot dog', 'pizza', 'donot', 'cake', 'chair', 'couch', 'potted plant', 'bed',
		'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote', 'keyboard', 'cell phone', 'microwave',
		'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear', 'hair dryer',
		'toothbrush'];
	// selectedCategories = [];
	// videoFile;
	constructor(private uploadService: UploadService) { }

	// onFileChange(event) {
	// 	if (event.target.files.length > 0) {
	// 		this.videoFile = event.target.files[0];
	// 	}
	// }

	onSubmit(redirect_url, image_link, ad_name) {
		this.state = 1;
		const formData = new FormData();
		formData.append('object', this.selectedCategory);
		formData.append('adName', ad_name);
		formData.append('imageLink', image_link);
		formData.append('redirectUrl', redirect_url);

		this.uploadService.upload(formData, 1).subscribe(
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

	// onChange(category, isChecked) {	  
	// 	if(isChecked) {
	// 		this.selectedCategories.push(category);
	// 	} else {
	// 	  let index = this.selectedCategories.findIndex(x => x.value == category)
	// 	  this.selectedCategories.splice(index, 1);
	// 	}
	// }
}
