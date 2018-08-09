import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { CompetidoresComponent } from './competidores/competidores.component';
import { routes } from './routes';
import { InformationComponent } from './information/information.component';
import { WodComponent } from './wod/wod.component';
import { WodNewComponent } from './wod-new/wod-new.component';
import { SafePipe } from './safe.pipe';
import { VideoExerciseComponent } from './videoExercise/videoExercise.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular5-social-login";
import { FileUploadModule } from 'ng2-file-upload';
import { ProfileComponent } from './profile/profile.component';


// Configs 
export function getAuthServiceConfigs() {
let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("167845067246-hmbn7jppmn6vnp6nad96ln5glqefcddh.apps.googleusercontent.com")
      },
    ]);
return config;
}


@NgModule({
   declarations: [
      AppComponent,
      SignupComponent,
      LoginComponent,
      LandingPageComponent,
      CompetidoresComponent,
      InformationComponent,
      WodComponent,
      WodNewComponent,
      SafePipe,
      VideoExerciseComponent,
      ProfileComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(routes),
      FormsModule,
      SocialLoginModule,
      FormsModule,
      FileUploadModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }