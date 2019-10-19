import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from  'rxjs/operators';


// const httpOptions = {
// 	headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
// 	responseType: 'text' as 'text'
//   };

@Injectable({
  providedIn: 'root'
})
export class UploadService {

	baseUrl = environment.baseUrl;
	constructor(private httpClient: HttpClient) { }

	public upload(data, type) {
		let uploadURL = (type == 0) ? `${this.baseUrl}/video/upload/` : `${this.baseUrl}/ads/new/`;

		return this.httpClient.post<any>(uploadURL, data, {
			reportProgress: true,
			observe: 'events'
		}).pipe(map((event) => {
			switch (event.type) {
				case HttpEventType.UploadProgress:
					const progress = Math.round(100 * event.loaded / event.total);
					return { status: 'progress', message: progress };

				case HttpEventType.Response:
				return event.body;
				default:
					return `Unhandled event: ${event.type}`;
				}
			})
		);
	}

}
