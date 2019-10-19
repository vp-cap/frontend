import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
	navVar;

	constructor() {
	  this.navVar = 1;
	}
  
	ngOnInit() {
	}
  
	navToggle(i) {
	  this.navVar = i;
  
	}
}
