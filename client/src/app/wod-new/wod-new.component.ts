import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../../services/competition.service';
import { VideoExerciseService } from '../../services/videoExercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wod-new',
  templateUrl: './wod-new.component.html',
  styleUrls: ['./wod-new.component.scss']
})
export class WodNewComponent implements OnInit {
  title:any;
  video:any;
  wodNumber:any;
  exer:any;
  name: any;
  newCompetition = {
    title: '',
    wod:[],
    exer:[]
  };

  
  constructor(private competitionService: CompetitionService, private execiseService : VideoExerciseService, private router:Router) { }

  ngOnInit() {
      this.execiseService.getList().subscribe(exercises=>(this.name = exercises))
    
  }

  submit(title,video,wodNumber, exer) {
    this.newCompetition.title = title;
    this.newCompetition.wod.push({video:video, wodNumber:Number(wodNumber)})
    this.newCompetition.exer = exer;
    console.log(exer)
    this.competitionService.newCompetition(this.newCompetition).subscribe(() => this.router.navigate(["/areaCompetidores"]))
  } 

}
