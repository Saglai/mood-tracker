import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MoodModel } from '../models/mood.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoodService {
  private url = 'https://8320-176-208-12-101.ngrok-free.app/api/mood';

  constructor(private http: HttpClient) { }

  getMoodPosts(): Observable<MoodModel[]> {
    const headers = new HttpHeaders()
      .set('ngrok-skip-browser-warning', 'true');
    return this.http.get<MoodModel[]>(this.url, { headers: headers });
  }
}
