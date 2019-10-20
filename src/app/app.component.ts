import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service'
import { DataService } from './services/data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackinout-frontend';

	constructor(private data: DataService, private router: Router) {}
	message:string;

	ngOnInit() {
		this.data.currentMessage.subscribe(message => this.message = message)
	}

	Search(query) {
		this.data.changeMessage(query);
		this.router.navigate(['/search']);
	}
}
