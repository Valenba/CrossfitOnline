import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  BASE_URL: string = "http://localhost:3000";
  athletes=[];
  constructor(private http: Http) {}

  getList() {
    return this.http
      .get(`${this.BASE_URL}/api/information`)
      .pipe(map(res => res.json()));
  }
  getByName(name) {
    return this.http
      .get(`${this.BASE_URL}/api/information/${name}`)
      .pipe(map(res => {res.json().forEach(element => {
        if(element.entrant.firstName == name){
          console.log(element.scores)
          
        this.athletes.push(element.scores);
        }
      }); 
      return this.athletes}));
  }
}