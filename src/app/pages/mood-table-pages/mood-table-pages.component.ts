import { Component, OnInit } from '@angular/core';
import { MoodModel } from 'src/app/models/mood.model';
import { MoodService } from 'src/app/services/mood-service.service';

@Component({
  selector: 'app-mood-table-pages',
  templateUrl: './mood-table-pages.component.html',
  styleUrls: ['./mood-table-pages.component.css']
})
export class MoodTablePagesComponent implements OnInit {
  moodList!: MoodModel[]

  constructor(private moodService: MoodService) {}

  ngOnInit() {
    this.getMoodList();
  }

  getMoodList() {
    this.moodService.getMoodPosts()
      .subscribe(moodList => this.moodList = moodList);
  }
}
