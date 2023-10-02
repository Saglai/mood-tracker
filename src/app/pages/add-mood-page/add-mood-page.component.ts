import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-mood-page',
  templateUrl: './add-mood-page.component.html',
  styleUrls: ['./add-mood-page.component.css']
})
export class AddMoodPageComponent {
  moodTypes = [
    {name: 'terrible', number: 1},
    {name: 'bad', number: 2},
    {name: 'not good', number: 3},
    {name: 'normal', number: 4},
    {name: 'good', number: 5},
    {name: 'great', number: 6},
    {name: 'amazing', number: 7}
  ];

  form = new FormGroup({
    mood: new FormControl(this.moodTypes[4]),
    note: new FormControl()
  })
}
