import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from '../environments/environment';

import {map, catchError} from 'rxjs/operators';
import { Observable } from "rxjs";
import { of } from 'rxjs';

const {BASEURL} = environment;

@Injectable({
    providedIn:"root"
  })
  export class VideoService {
  
    constructor(private http:Http) {}
    

    errorHandler(e){
        console.log('SessionServiceError')
        console.log(e.message);
        console.log(e);
        return e;
      }
    }