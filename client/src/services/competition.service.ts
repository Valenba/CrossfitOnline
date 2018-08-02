import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  BASE_URL: string = "http://localhost:3000";
  constructor(private http: Http) {}

  getList() {
    return this.http
      .get(`${this.BASE_URL}/api/competition`)
      .pipe(map(res => res.json()));
  }

  newCompetition(competition) {
    return this.http
      .post(`${this.BASE_URL}/api/competition`, competition)
      .pipe(map(res => res.json()));
  }

  get(id) {
    return this.http
      .get(`${this.BASE_URL}/api/competition/${id}`)
      .pipe(map(res => res.json()));
  }

  edit(competition) {
    return this.http
      .put(`${this.BASE_URL}/api/competition/${competition._id}`, competition)
      .pipe(map(res => res.json()));
  }

  remove(id) {
    return this.http
      .delete(`${this.BASE_URL}/api/competition/${id}`)
      .pipe(map(res => res.json()));
  } 

}