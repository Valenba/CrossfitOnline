import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';

const {BASEURL} = environment;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: `${BASEURL}/api/signup`,
    method: 'POST'
  });
  feedback;

  constructor(private sessionService:SessionService, private socialAuthService: AuthService, private router:Router) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.sessionService.isLogged().subscribe(us =>{
        this.router.navigate(['/profile']);
      })
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.signup(userData.name, userData.id, userData.email);           
      }
    );
  }
  signup(username:string, password:string, email:string){
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('username', username);
      form.append('password', password);
      form.append('email', email);
    };
    console.log("signup....");
    if(this.uploader.queue.length==0){
    this.sessionService.signup(username,password,email).subscribe( (user:any) =>{
      console.log(`WELCOME USER ${user.username}, register OK`);
      console.log(user);
      this.router.navigate(['/profile']);
    });
  }else{
    this.uploader.uploadAll()
    this.uploader.onCompleteItem = () =>{}
  }
  }
}