import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { CompetidoresComponent } from './competidores/competidores.component';
import { InformationComponent } from './information/information.component';
import { WodComponent } from './wod/wod.component';
import { WodNewComponent } from './wod-new/wod-new.component';



export const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path:'home', component:LandingPageComponent},
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'areaCompetidores', component:CompetidoresComponent },
  { path:'information', component:InformationComponent},
  { path:'wod/:id', component:WodComponent},
  { path: 'new', component: WodNewComponent},

  //Youtube:AIzaSyBhtaKmsGu2d3zHkQeGK6vx9niDgnZkYNo
  //Crossfit API: https://www.reddit.com/r/crossfit/comments/7vfe5d/crossfit_open_leaderboard_api/
  //Spotify: 6f0df9a96c574f5caacc8534d5a13d70
];