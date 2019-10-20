import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
// import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

	baseUrl = environment.baseUrl;
	constructor(private httpClient: HttpClient) { }

	public search(query) {
		let uploadURL = `${this.baseUrl}/video/search/`;

		const formData = new FormData();
		formData.append('query', query);
		console.log(formData);

		return this.httpClient.post<any>(uploadURL, formData, {});
	}
}
