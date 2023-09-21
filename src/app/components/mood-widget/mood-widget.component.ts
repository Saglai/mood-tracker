import { Component, OnInit } from '@angular/core';
import { MoodModel } from 'src/app/models/mood.model';
import { MoodService } from 'src/app/services/mood-service.service';

@Component({
  selector: 'app-mood-widget',
  templateUrl: './mood-widget.component.html',
  styleUrls: ['./mood-widget.component.css']
})
export class MoodWidgetComponent implements OnInit {
  latestMood?: MoodModel 

  constructor(private moodService: MoodService) {}

  ngOnInit(): void {
    this.getLatestPost();
  }

  getLatestPost() {
    this.moodService.getLatestMoodPost()
    .subscribe(mood => this.latestMood = mood)
  }
}
