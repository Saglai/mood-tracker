import { Component, Input } from '@angular/core';
import { MoodModel } from 'src/app/models/mood.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  shouldSortByRise!: Boolean;
  currentSortedColumn!: String;

  constructor() {}

  @Input() posts!: MoodModel[];

  sortByMood(): void {
    const sortByRise = () => {
      this.posts = this.posts.sort((a, b) => +a.moodType - +b.moodType);
    }

    const sortByDecrease = () => {
      this.posts = this.posts.sort((a, b) => +b.moodType - +a.moodType);
    }

    this.sortByColumn('mood', sortByRise, sortByDecrease);
  }

  sortByDate() {
    const sortByRise = () => {
      this.posts = this.posts.sort((a, b) => this.toTimestamp(a.createdDate) - this.toTimestamp(b.createdDate));
    }

    const sortByDecrease = () => {
      this.posts = this.posts.sort((a, b) => this.toTimestamp(b.createdDate) - this.toTimestamp(a.createdDate));
    }

    this.sortByColumn('date', sortByRise, sortByDecrease);
  }

  sortByColumn(col: string, sortByRiseFn: Function, sortByDecreaseFn: Function) {
    if (this.currentSortedColumn !== col) {
      this.currentSortedColumn = col;
      this.shouldSortByRise = true;
    }

    if (this.shouldSortByRise) {
      sortByRiseFn();
    } else {
      sortByDecreaseFn();
    }

    this.shouldSortByRise = !this.shouldSortByRise;
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
