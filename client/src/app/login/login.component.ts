import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private sessionService:SessionService, private router:Router) { }

  ngOnInit() {
  }
  login(username:string, password:string,form){
    console.log("login....");
    this.sessionService.login(username,password).subscribe( user => {
      console.log(user);
      if(this.sessionService.user){
      this.router.navigate(["/areaCompetidores"])
      }else{
        form.reset();
      }
    });
  }
}
