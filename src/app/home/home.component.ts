import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllVideos().subscribe((data:any) => {
      this.videos = data.videos;
      console.log(this.videos);
    });
  }

}
