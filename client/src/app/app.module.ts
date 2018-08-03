import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '../../node_modules/@angular/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { CompetidoresComponent } from './competidores/competidores.component';
import { routes } from './routes';
import { InformationComponent } from './information/information.component';
import { WodComponent } from './wod/wod.component';
import { WodNewComponent } from './wod-new/wod-new.component';
import { SafePipe } from './safe.pipe';


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
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }