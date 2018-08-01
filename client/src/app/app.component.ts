import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '../../node_modules/@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(public sessionService: SessionService, private router:Router){}
  ngOnInit(){
  }
  logout(){
    this.sessionService.logout().subscribe(() => this.router.navigate(["/"]))
    
  }
}
