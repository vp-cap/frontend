import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

	baseUrl = environment.baseUrl;
	constructor(private httpClient: HttpClient, private router: Router) { }

	result

	public search(query) {
		let uploadURL = `${this.baseUrl}/video/search/`;

		return this.httpClient.post<any>(uploadURL, query, {
			reportProgress: true,
			observe: 'events'
		}).pipe(tap((result) => {
			console.log("re");
			result = result
			this.router.navigate(['/search']);})
		)
		.subscribe();
	}
}