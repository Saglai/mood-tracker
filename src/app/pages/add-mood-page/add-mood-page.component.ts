import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { AddMoodModel, MoodTypeModel } from 'src/app/models/mood.model';
import { MoodService } from 'src/app/services/mood-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mood-page',
  templateUrl: './add-mood-page.component.html',
  styleUrls: ['./add-mood-page.component.css']
})
export class AddMoodPageComponent {
  moodTypes:  MoodTypeModel[] = [
    MoodTypeModel.terrible,
    MoodTypeModel.bad,
    MoodTypeModel.notgood,
    MoodTypeModel.normal,
    MoodTypeModel.good,
    MoodTypeModel.great,
    MoodTypeModel.amazing
  ]

  form = new FormGroup({
    mood: new FormControl(this.moodTypes[4]),
    note: new FormControl()
  })

  constructor(
    private location: Location,
    private moodService: MoodService,
    private router: Router
    ) {}

  goBack() {
    this.location.back();
  }

  addMoodPost() {
    const newMoodPost = this.createMoodPost();
    this.moodService.addMoodPost(newMoodPost)
      .subscribe(() => this.router.navigateByUrl('/mood-table'));
  }

  createMoodPost(): AddMoodModel {
    let newMoodPost = new AddMoodModel()
    newMoodPost.moodType = this.form.value.mood as MoodTypeModel;
    newMoodPost.note = this.form.value.note.toString();

    console.log(newMoodPost);
    return newMoodPost
  }
}
