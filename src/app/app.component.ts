import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackinout-frontend';

	constructor(private searchService: SearchService) {}

	Search(query) {
		console.log(query)
		this.searchService.search(query)
	}
}
