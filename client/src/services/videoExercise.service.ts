import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

const {BASEURL} = environment;


@Injectable({
  providedIn: 'root'
})
export class VideoExerciseService {
  BASE_URL: string = BASEURL;
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