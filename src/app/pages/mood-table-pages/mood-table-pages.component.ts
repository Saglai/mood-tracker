import { Component, OnInit } from '@angular/core';
import { MoodModel } from 'src/app/models/mood.model';
import { MoodService } from 'src/app/services/mood-service.service';

@Component({
  selector: 'app-mood-table-pages',
  templateUrl: './mood-table-pages.component.html',
  styleUrls: ['./mood-table-pages.component.css']
})
export class MoodTablePagesComponent implements OnInit {
  moodPosts!: MoodModel[]
  searchValue = '';

  constructor(private moodService: MoodService) {}

  ngOnInit() {
    this.getMoodPosts();
  }

  getMoodPosts() {
    this.moodService.getMoodPosts()
      .subscribe(moodPosts => this.moodPosts = moodPosts);
  }

  search() {
    this.moodPosts = this.moodPosts.filter(mood => mood.note.includes(this.searchValue));
  }

  clear() {
    this.getMoodPosts();
    this.searchValue = '';
  }
}
