import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoExerciseService {
  BASE_URL: string = "http://localhost:3000";
  constructor(private http: Http) {}

  getList() {
    return this.http
      .get(`${this.BASE_URL}/api/tagVideo`)
      .pipe(map(res => res.json()));
  }

  getExercise(url) {
    return this.http
      .get(`${this.BASE_URL}/api/tagVideo/${url}`)
      .pipe(map(res => res.json()));
  }
}