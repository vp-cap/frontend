import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit, OnDestroy {
  @ViewChild('videoEl') videoEl: ElementRef;
  id: String;
  title: String;
  description: String;
  category: String;
  streamURL: String;
  adLink: String;
  adImage: String;
  adPosition = 20;
  adVisibility: String = "none";
  sub;

  constructor(private _Activatedroute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('video_id');
      this.streamURL = this.apiService.getStreamURL(this.id);
      this.parseVideoData(this.apiService.getVideoData(this.id));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  parseVideoData(data) {
    // this.title = data.video.title;
    // this.description = data.video.description;
    // this.category = data.video.category;
    // // this.data.ad_data.redirect_link, image_link, category, object, best_frame
    // this.adLink = data.ad_data.redirect_link;
    // this.adImage = data.ad_data.image_link;
    // this.adLink = data.ad_data.redirect_link;
    // this.adPosition = this.convertToSeconds(data.ad_data.best_frame);
    this.videoEl.nativeElement.addEventListener('timeupdate', this.parseFrames.bind(this));
  }

  parseFrames(event) {
    let time = event.srcElement.currentTime;
    if (time > this.adPosition && time < this.adPosition + 2) {
      this.adVisibility = "block";
    } else {
      this.adVisibility = "none";
    }
  }

  convertToSeconds(frame) {
    return frame / 30;
  }
}
