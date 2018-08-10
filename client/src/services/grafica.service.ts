import { Injectable } from "@angular/core";
import { Chart } from "chart.js";

@Injectable({
  providedIn: "root"
})
export class GraficaService {
  constructor() { }
  show: boolean = true;
  stats: boolean = true;
  winRate: number;
  played: number;
  wonMatches: number;
  canvas: any = {};
  userEndedMatches: any;
  public chart = [];

  compareAthletes(athlete1, athlete2) {
    let name1 = athlete1.entrant.competitorName;
    let name2 = athlete2.entrant.competitorName;
    this.canvas = <HTMLCanvasElement>document.getElementById(`canvas`);
    var ctx = this.canvas.getContext("2d");
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["ordinal1", "ordinal2", "ordinal3", "ordinal4", "ordinal5", "ordinal6"],
        datasets: [{
          label: name1,
          data: [Number(athlete1.scores[0].rank),Number(athlete1.scores[1].rank),Number(athlete1.scores[2].rank),Number(athlete1.scores[3].rank),Number(athlete1.scores[4].rank),Number(athlete1.scores[5].rank)],
          backgroundColor: '#f9d132',
          borderColor: 'rgba(99, 132, 0, 1)',
          yAxisID: "y-axis-gravity"
        },
        {
          label: name2,
          data: [Number(athlete2.scores[0].rank),Number(athlete2.scores[2].rank),Number(athlete2.scores[2].rank),Number(athlete2.scores[3].rank),Number(athlete2.scores[4].rank),Number(athlete2.scores[5].rank)],
          backgroundColor: 'black',
          borderColor: 'rgba(99, 132, 0, 1)',
          yAxisID: "y-axis-gravity"
        }],
      },
      options: {
        scales: {
          xAxes: [{
            barPercentage: 1,
          }],
          yAxes: [ {
            id: "y-axis-gravity"
          }]
        }
      }

    }
    )
  }
}



