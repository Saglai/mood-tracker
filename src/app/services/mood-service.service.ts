import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MoodModel } from '../models/mood.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoodService {
  private moodUrl = 'https://2d5b-176-208-12-101.ngrok-free.app/api/mood';
  private affirmationUrl = 'https://api.adviceslip.com/advice';
  private headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');

  constructor(private http: HttpClient) { }

  getMoodPosts(): Observable<MoodModel[]> {
    return this.http.get<MoodModel[]>(this.moodUrl, { headers: this.headers });
  }

  getLatestMoodPost(): Observable<MoodModel> {
    return this.http.get<MoodModel>(`${this.moodUrl}/latest`, { headers: this.headers });
  }

  getRandomAdvice() {
    return this.http.get(this.affirmationUrl);
  }
}
