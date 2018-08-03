import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-competidores',
  templateUrl: './competidores.component.html',
  styleUrls: ['./competidores.component.scss']
})

export class CompetidoresComponent implements OnInit {

  wods: Array<any>;

  constructor(private competitionService : CompetitionService) { 
  }
  
  ngOnInit() {
    this.competitionService.getList().subscribe(data => {
      this.wods = data
    });
  }

}
