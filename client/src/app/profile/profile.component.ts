import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user;

  constructor(private sessionService:SessionService) { }

  ngOnInit() {
    setTimeout(()=>{
      this.user = this.sessionService.user;

    },50)
    }
  }


