import { Component, OnInit } from '@angular/core';
import { MoodService } from 'src/app/services/mood-service.service';

@Component({
  selector: 'app-text-banner',
  templateUrl: './text-banner.component.html',
  styleUrls: ['./text-banner.component.css']
})
export class TextBannerComponent implements OnInit {
  advice!: any;

  constructor(private moodService: MoodService) {}

  ngOnInit() {
    this.getRandomAdvice();
  }

  getRandomAdvice() {
    this.moodService.getRandomAdvice()
    .subscribe(advice => this.advice = advice)
  }
}
