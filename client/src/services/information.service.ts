import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

const {BASEURL} = environment;

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  BASE_URL: string = BASEURL;
  athletes=[];
  constructor(private http: Http) {}

  getList() {
    return this.http
      .get(`${this.BASE_URL}/api/information`)
      .pipe(map(res => res.json()));
  }
  getByName(name1) {
    return this.http
      .get(`${this.BASE_URL}/api/information/${name1}`)
      .pipe(map(res => {res.json().forEach(element => {
        if(element.entrant.firstName == name1){
          
        this.athletes.push(element);
        }
      }); 
      return this.athletes}));
  }
}