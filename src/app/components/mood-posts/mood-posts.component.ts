import { Component, Input } from '@angular/core';
import { MoodModel } from 'src/app/models/mood.model';

@Component({
  selector: 'app-mood-posts',
  templateUrl: './mood-posts.component.html',
  styleUrls: ['./mood-posts.component.css']
})
export class MoodPostsComponent {

  constructor() {}

  @Input() moodPosts!: MoodModel[];
}
