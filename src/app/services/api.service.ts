import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getStreamURL(id) {
    return `${this.baseUrl}/video/watch/${id}`;
  }

  public getVideoData(id) {
    let requestURL = `${this.baseUrl}/video/${id}/`;

    return this.httpClient.get(requestURL);
  }

  public getAllVideos() {
    let requestURL = `${this.baseUrl}/video/all/`;
    return this.httpClient.get(requestURL);
  }

}
