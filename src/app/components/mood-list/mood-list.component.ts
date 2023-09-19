import { Component, Input } from '@angular/core';
import { MoodModel } from 'src/app/models/mood.model';

@Component({
  selector: 'app-mood-list',
  templateUrl: './mood-list.component.html',
  styleUrls: ['./mood-list.component.css']
})
export class MoodListComponent {

  constructor() {}

  @Input() moodList!: MoodModel[];
}
