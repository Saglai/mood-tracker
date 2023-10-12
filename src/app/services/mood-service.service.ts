import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddMoodModel, MoodModel } from '../models/mood.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoodService {
  private moodUrl = 'https://0eff-95-156-71-146.ngrok-free.app/api/mood';
  private adviceTextUrl = 'https://api.adviceslip.com/advice';
  private headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');

  constructor(private http: HttpClient) { }

  getMoodPosts(): Observable<MoodModel[]> {
    return this.http.get<MoodModel[]>(this.moodUrl, { headers: this.headers });
  }

  getLatestMoodPost(): Observable<MoodModel> {
    return this.http.get<MoodModel>(`${this.moodUrl}/latest`, { headers: this.headers });
  }

  getMoodPostById(id: String) {
    return this.http.get<MoodModel>(`${this.moodUrl}/${id}`, { headers: this.headers });
  }

  getRandomAdvice() {
    return this.http.get(this.adviceTextUrl);
  }

  addMoodPost(newMoodPost: AddMoodModel): Observable<any> {
    return this.http.post<AddMoodModel>(this.moodUrl, newMoodPost);
  }
}
