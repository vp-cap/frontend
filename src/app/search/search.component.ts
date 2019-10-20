import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	videos = {}

	constructor(private searchService: SearchService) { 
		this.videos = searchService.result
		console.log(this.videos)
	}

  ngOnInit() {
  }

}
