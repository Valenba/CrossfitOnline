import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../../services/competition.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'wod-new',
  templateUrl: './wod-new.component.html',
  styleUrls: ['./wod-new.component.scss']
})
export class WodNewComponent implements OnInit {

  newCompetition = {
    title: '',
    wod:[]
  };
  
  constructor(private competitionService: CompetitionService, private router:Router) { }

  ngOnInit() {
  }

  submit(title,video,wodNumber) {
    this.newCompetition.title = title;
    this.newCompetition.wod.push({video:video, wodNumber:Number(wodNumber)})
    console.log()
    this.competitionService.newCompetition(this.newCompetition).subscribe(() => this.router.navigate(["/areaCompetidores"]))
  }


}
