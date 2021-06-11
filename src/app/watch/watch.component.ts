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
  name: String;
  description: String;
  storageLink: String;
  streamURL: String;
  adVisibility: String = "none";
  adImage: String;
  adLink: String;
  intervals;
  ads;
  sub;
  pos;

  constructor(private _Activatedroute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('video_id');
      this.apiService.getVideoAndAdData(this.id).subscribe(data => {
        this.parseVideoAndAdData(data);
      });
      // this.parseVideoAndAdData("");
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  async parseVideoAndAdData(data) {
    console.log(data);
    this.name = data.video.Name;
    this.description = data.video.Description;
    this.storageLink = data.video.StorageLink;
    this.ads = {}
    if (data.ads != null) {
      data.ads.forEach(x => {
        // console.log(x)
        this.ads[x.Object] = {adImage: x.ImageLink, adLink: x.RedirectURL};
      });
    }
    console.log(this.ads);
    this.intervals = []
    if (data.intervals != null) {
      for (var x in data.intervals) {
        // console.log(data.intervals[x])
        this.intervals.push([data.intervals[x].Start / 30.0, 0, x])
        this.intervals.push([data.intervals[x].End / 30.0, 1, x])
      }
    }
    this.intervals.sort(function(a, b) {
        return a[0] - b[0];
    });
    this.pos = 0;
    console.log(this.intervals);
    this.streamURL = "http://gateway.ipfs.io/ipfs/" + this.storageLink;

    this.videoEl.nativeElement.load()
    this.videoEl.nativeElement.addEventListener('timeupdate', this.parseFrames.bind(this));
  }

  parseFrames(event) {
    let time = event.srcElement.currentTime;
    var ind = this.bsearch(this.intervals, time);
    console.log(ind)
    if (ind != -1 && this.ads[this.intervals[ind][2]] !== undefined) {
      this.adVisibility = "block";
      this.adLink = this.ads[this.intervals[this.pos][2]].adLink
      this.adImage = this.ads[this.intervals[this.pos][2]].adImage
    } else {
      this.adVisibility = "none";
    }
  }

  bsearch(intervals, target, low = 0, high = intervals.length - 1) {
    var res = -1;
    while (low <= high) {
      var mid = Math.floor((low + high) / 2)
      if (intervals[mid][0] <= target) {
        low = mid + 1
        res = mid;
      } else {
        high = mid - 1;
      }
    }
    if (res == -1 || intervals[res][1] == 1) return -1;
    return res;
  }

  convertToSeconds(frame) {
    return frame / 30;
  }
}
