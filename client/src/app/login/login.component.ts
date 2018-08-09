import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private sessionService:SessionService,private socialAuthService: AuthService, private router:Router) { }

  ngOnInit() {
  }
  public socialLogin(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.login(userData.name, userData.id);           
      }
    );
  }

  login(username:string, password:string,form ?){
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
