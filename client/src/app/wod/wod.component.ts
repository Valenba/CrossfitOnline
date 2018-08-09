import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CompetitionService } from "../../services/competition.service";

@Component({
  selector: "app-wod",
  templateUrl: "./wod.component.html",
  styleUrls: ["./wod.component.scss"]
})


export class WodComponent implements OnInit {
  wod;
  

  constructor(
    private route: ActivatedRoute,
    private competitionService: CompetitionService,
    private router: Router,
  ) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.competitionService.get(params.id).subscribe(wod => {
        this.wod = wod;
        console.log(this.wod)
      });
    });
  }

  deleteWod() {
    this.competitionService
      .remove(this.wod._id)
      .subscribe(() => this.router.navigate(["/areaCompetidores"]));
  }

}