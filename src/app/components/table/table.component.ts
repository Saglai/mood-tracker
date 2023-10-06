import { Component, Input } from '@angular/core';
import { MoodModel } from 'src/app/models/mood.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  isMoodSortByRise = -1;
  isDateSortByRise = -1;

  constructor() {}

  @Input() moodPosts!: MoodModel[];

  sortByMood(): void {
    if (this.isMoodSortByRise === 0) {
      this.moodPosts = this.moodPosts.sort((a, b) => +a.moodType - +b.moodType);
      this.isMoodSortByRise = 1;
    } else {
      this.moodPosts = this.moodPosts.sort((a, b) => +b.moodType - +a.moodType);
      this.isMoodSortByRise = 0;
    }
  }

  sortByDate() {
    if (this.isDateSortByRise === 0) {
      this.moodPosts = this.moodPosts.sort((a, b) => this.toTimestamp(a.createdDate) - this.toTimestamp(b.createdDate));
      this.isDateSortByRise = 1;
    } else {
      this.moodPosts = this.moodPosts.sort((a, b) => this.toTimestamp(b.createdDate) - this.toTimestamp(a.createdDate));
      this.isDateSortByRise = 0;
    }
  }

  toTimestamp(time: String) {
    const date = time.split('T')[0];
    const year = date.split('-')[0];
    const month = date.split('-')[1];
    const day = date.split('-')[2];

    const hours = time.split('T')[1];
    const hour = hours.split(':')[0];
    const minute = hours.split(':')[1];
    const sec = hours.split(':')[2];

    const timestamp = new Date(+year, +month, +day, +hour, +minute, +sec);
    return +timestamp;
  }
}
