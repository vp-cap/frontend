import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  videoServiceUrl = environment.videoServiceUrl;
  constructor(private httpClient: HttpClient) { }

  public getVideoAndAdData(id) {
    console.log(this.videoServiceUrl)
    let requestURL = `${this.videoServiceUrl}/videos/${id}`;

    return this.httpClient.get(requestURL);
  }

  public getAllVideos() {
    let requestURL = `${this.videoServiceUrl}/videos`;
    return this.httpClient.get(requestURL);
  }

}
