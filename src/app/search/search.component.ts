import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	message:string;
	videos = [];

	constructor(private data: DataService, private searchService: SearchService) { 
	}

	ngOnInit() {
		this.data.currentMessage.subscribe((message) => {
			this.message = message;
			console.log("Query = " + this.message)
			if (this.message != undefined && this.message != '' && this.message != null) {
				this.searchService.search(this.message).subscribe((data) => {
					data = data['body'];

					for (let k in data) {
						console.log(k)
						for (let x in data[k]) {
							this.videos.push(data[k][x])
						}
					}
					console.log(this.videos)
				}) 
			}
		});
	}


}
