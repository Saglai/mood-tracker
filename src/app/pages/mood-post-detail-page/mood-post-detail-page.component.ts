import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoodModel } from 'src/app/models/mood.model';
import { MoodService } from 'src/app/services/mood-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mood-post-detail-page',
  templateUrl: './mood-post-detail-page.component.html',
  styleUrls: ['./mood-post-detail-page.component.css']
})
export class MoodPostDetailPageComponent implements OnInit {
  post!: MoodModel

  constructor(
    private moodService: MoodService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getMoodPost();
  }

  getMoodPost() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.moodService.getMoodPostById(id)
      .subscribe(post => this.post = post);
  }

  goBack() {
    this.location.back()
  }
}
